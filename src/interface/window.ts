import { Borders, Sides } from './borders';
import { ASCIICanvas } from './ascii-canvas';
import { WindowRoot } from './window-root';

// abusing truthiness in JS to map horizontal to false
export enum ChildrenDirections {
  horizontal = 0,
  vertical = 1,
}

class SizeWithLock {
  size: number = 0;
  locked: boolean = false;
}

export enum TitlePosition {
  left = 0,
  center = 1,
  right = 2,
}

export class WindowBase {
  name: string;
  title?: string;
  titlePosition: TitlePosition = TitlePosition.left;
  titleShift = 3;

  width: number = 0;
  height: number = 0;
  padding: Sides = new Sides();
  borders: Borders;

  sizeMin?: number;
  sizeMax?: number;
  sizeWeight: number = 1;

  protected _children: WindowBase[] = [];
  contentDirection: ChildrenDirections = ChildrenDirections.vertical;

  protected _canvas: ASCIICanvas = new ASCIICanvas();
  changed: boolean = true;

  constructor(name: string) {
    this.name = name;
  }

  get indexLeft(): number {
    return this.padding.left + (this.borders?.left ? 1 : 0);
  }
  get indexRight(): number {
    return this.width - this.padding.right - (this.borders?.right ? 1 : 0) - 1;
  }
  get indexTop(): number {
    return this.padding.top + (this.borders?.top ? 1 : 0);
  }
  get indexBottom(): number {
    return this.height - this.padding.bottom - (this.borders?.bottom ? 1 : 0) - 1;
  }

  get interiorHeight(): number {
    return (
      this.height -
      this.padding.top -
      this.padding.bottom -
      (this.borders?.top ? 1 : 0) -
      (this.borders?.bottom ? 1 : 0)
    );
  }
  get interiorWidth(): number {
    return (
      this.width -
      this.padding.left -
      this.padding.right -
      (this.borders?.left ? 1 : 0) -
      (this.borders?.right ? 1 : 0)
    );
  }

  /**
   * returns interior space for main content direction
   */
  get contentSpace(): number {
    if (this.contentDirection) return this.interiorHeight;
    return this.interiorWidth;
  }

  /**
   * returns content start within canvas along main content axis
   */
  get contentStart(): number {
    if (this.contentDirection) return this.indexTop;
    return this.indexLeft;
  }

  /**
   * returns content end within canvas along main content axis
   */
  get contentEnd(): number {
    if (this.contentDirection) return this.indexBottom;
    return this.indexRight;
  }

  addChild(child: WindowBase) {
    this._children.push(child);
  }

  /**
   * Resizes the frame
   * @returns true if the size changed
   */
  resize(width: number, height: number): boolean {
    width = Math.floor(width);
    height = Math.floor(height);
    if (this.width == width && this.height == height) return;
    this.width = width;
    this.height = height;
    this._canvas.resize(this.width, this.height);
    this.changed = true;
  }

  private _fillBorder() {
    if (!this.borders) {
      return;
    }
    let titleOffset;
    if (this.title) {
      switch (this.titlePosition) {
        case TitlePosition.left:
          titleOffset = -this.titleShift;
          break;
        case TitlePosition.center:
          titleOffset = Math.floor(-(this.width - this.title.length) / 2);
          break;
        case TitlePosition.right:
          titleOffset = -(this.width - this.title.length - this.titleShift);
          break;
      }
    }
    if (this.borders.left) {
      for (let i = 1; i < this.height - 1; i++) {
        this._canvas.setAt(this.borders.left, [0, i]);
      }
    }
    if (this.borders.right) {
      for (let i = 1; i < this.height - 1; i++) {
        this._canvas.setAt(this.borders.right, [this.width - 1, i]);
      }
    }
    if (this.borders.top) {
      for (let i = 1; i < this.width - 1; i++) {
        titleOffset++;
        if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
          this._canvas.setAt(this.title[titleOffset], [i, 0]);
        } else {
          this._canvas.setAt(this.borders.top, [i, 0]);
        }
      }
    }
    if (this.borders.bottom) {
      for (let i = 1; i < this.width - 1; i++) {
        this._canvas.setAt(this.borders.bottom, [i, this.height - 1]);
      }
    }
    if (this.borders.topLeft) this._canvas.setAt(this.borders.topLeft, [0, 0]);
    if (this.borders.topRight) this._canvas.setAt(this.borders.topRight, [this.width - 1, 0]);
    if (this.borders.bottomLeft) this._canvas.setAt(this.borders.bottomLeft, [0, this.height - 1]);
    if (this.borders.bottomRight)
      this._canvas.setAt(this.borders.bottomRight, [this.width - 1, this.height - 1]);
  }

  requestRedraw() {
    this.changed = true;
    WindowRoot.redraw();
  }

  protected _update(): ASCIICanvas {
    if (!this.changed) return this._canvas;
    this._fillBorder();
    if (this._children.length === 0) {
      return this._canvas;
    }

    const sizes = this._negotiateChildrenSize();
    let contentPos = this.contentStart;
    if (this.contentDirection) {
      // vertical
      for (const i in this._children) {
        this._children[i].resize(this.interiorWidth, sizes[i].size);
        const childGrid = this._children[i]._update();
        this._canvas.blit(childGrid, [this.indexLeft, contentPos]);
        contentPos += childGrid.height;
      }
    } else {
      // horizontal
      for (const i in this._children) {
        this._children[i].resize(sizes[i].size, this.interiorHeight);
        const childGrid = this._children[i]._update();
        this._canvas.blit(childGrid, [contentPos, this.indexTop]);
        contentPos += childGrid.width;
      }
    }
    return this._canvas;
  }

  private _negotiateChildrenSize(): SizeWithLock[] {
    // TODO: come up with some test cases to verify this actually behaves right (sizes come out correct with various weights and limits, edge cases like fractional results, overflows, and leftover space)
    // TODO: dole out remainder
    // TODO: if this.contentSize and child weight and min/max haven't changed, skip resize
    const sizes = new Array(this._children.length);
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] = {};
    }

    // TODO: better escape condition than just "cut after ten loops"
    // TODO: I feel like this can be done more gracefully without iteration
    for (let i = 0; i < 10; i++) {
      let weightSum = 0;
      let childrenRemaining = 0;
      let lockedSize = 0;

      for (const j in sizes) {
        if (sizes[j].locked) {
          lockedSize += sizes[j].size;
          continue;
        }
        childrenRemaining += 1;
        weightSum += this._children[j].sizeWeight;
      }

      if (childrenRemaining == 0) {
        // ran out of options
        return sizes;
      }

      const remainingSize = this.contentSpace - lockedSize;
      if (remainingSize <= 0) {
        // ran out of space
        return sizes;
      }

      let renegotiate = false;
      for (const j in sizes) {
        if (sizes[j].locked) continue;
        const child = this._children[j];
        sizes[j].size = (child.sizeWeight / weightSum) * remainingSize;
        if (child.sizeMax !== undefined && sizes[j].size >= child.sizeMax) {
          sizes[j].size = child.sizeMax;
          sizes[j].locked = true;
          renegotiate = true;
          continue;
        }
        if (child.sizeMin !== undefined && sizes[j].size <= child.sizeMin) {
          sizes[j].size = child.sizeMin;
          sizes[j].locked = true;
          renegotiate = true;
          continue;
        }
      }

      if (!renegotiate) {
        // got where we want to be
        return sizes;
      }
    }
    return sizes;
  }
}
