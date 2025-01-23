import { Borders, Sides } from './borders';

// abusing truthiness in JS to map horizontal to false
export enum ChildrenDirections {
  horizontal = 0,
  vertical = 1,
}

// TODO: turn into class with width and height methods, simple constructor, coordinate access for getting and setting, protections against out of bounds access
// TODO: move blit into grid class? (maybe keep it in WindowBase, so we can keep the protected margin/border/padding region)
//    alternately, move to blit, just remember to scale and offset contents before blitting
export type Grid = string[][];

export type Position = [number, number];
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
  margin: Sides = new Sides();
  padding: Sides = new Sides();
  borders: Borders;

  sizeMin?: number;
  sizeMax?: number;
  sizeWeight: number = 1;

  children: WindowBase[] = [];
  contentDirection: ChildrenDirections = ChildrenDirections.vertical;

  grid: Grid = [];
  _lastWidth: number;
  _lastHeight: number;
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
    this.children.push(child);
  }

  /**
   * Resizes the frame
   *
   * @returns true if the size changed
   */
  resize(width: number, height: number): boolean {
    // TODO: dole out remainder in size negotiation
    width = Math.floor(width);
    height = Math.floor(height);
    if (this.width == width && this.height == height) return;
    this.width = width;
    this.height = height;
    // console.log(`${this.name} resized to ${this.width} x ${this.height}`);
    this.grid = new Array(height).fill([]);
    for (const i in this.grid) {
      this.grid[i] = new Array(width).fill(' ');
    }
    // this.fillBorder();
    this.changed = true;
  }

  /**
   * Populates border and title around frame
   */
  fillBorder() {
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
    if (!this.borders) {
      return;
    }
    if (this.borders.left || this.borders.right) {
      for (let i = this.margin.top + 1; i < this.height - this.margin.bottom - 1; i++) {
        if (this.borders.left) {
          this.grid[i][this.margin.left] = this.borders.left;
        }
        if (this.borders.right) {
          this.grid[i][this.width - this.margin.right - 1] = this.borders.right;
        }
      }
    }
    if (this.borders.top || this.borders.bottom) {
      for (let i = this.margin.left + 1; i < this.width - this.margin.right - 1; i++) {
        titleOffset++;
        if (this.borders.top) {
          if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
            this.grid[this.margin.top][i] = this.title[titleOffset];
          } else {
            this.grid[this.margin.top][i] = this.borders.top;
          }
        }
        if (this.borders.bottom) {
          this.grid[this.height - this.margin.bottom - 1][i] = this.borders.bottom;
        }
      }
    }
    if (this.borders.topLeft) this.grid[this.margin.top][this.margin.left] = this.borders.topLeft;
    if (this.borders.topRight)
      this.grid[this.margin.top][this.width - this.margin.right - 1] = this.borders.topRight;
    if (this.borders.bottomLeft)
      this.grid[this.height - this.margin.bottom - 1][this.margin.left] = this.borders.bottomLeft;
    if (this.borders.bottomRight)
      this.grid[this.height - this.margin.bottom - 1][this.width - this.margin.right - 1] =
        this.borders.bottomRight;
  }

  update(): Grid {
    if (!this.changed) return this.grid;
    this.fillBorder();
    if (this.children.length === 0) {
      return this.grid;
    }

    const sizes = this.negotiateChildrenSize();
    let contentPos = this.contentStart;
    if (this.contentDirection) {
      for (const i in this.children) {
        this.children[i].resize(this.interiorWidth, sizes[i].size);
        const childGrid = this.children[i].update();
        [, contentPos] = this.blit(childGrid, [this.indexLeft, contentPos]);
      }
    } else {
      for (const i in this.children) {
        this.children[i].resize(sizes[i].size, this.interiorHeight);
        const childGrid = this.children[i].update();
        [contentPos] = this.blit(childGrid, [contentPos, this.indexTop]);
      }
    }
    return this.grid;
  }
  /**
   *
   * @param srcGrid source to blit into this grid
   * @param position coordinate of top left corner of grid
   * @returns x,y coordinates of finished blit (clipped to target grid)
   */
  blit(srcGrid: Grid, [x, y]: Position): Position {
    if (srcGrid.length === 0 || srcGrid[0].length === 0) {
      return [
        Math.max(Math.min(x, this.indexRight), this.indexLeft),
        Math.max(Math.min(y, this.indexBottom), this.indexTop),
      ];
    }
    for (let childY = 0, i = y; childY < srcGrid.length && i <= this.indexBottom; childY++, i++) {
      if (i < this.indexTop) continue;
      for (
        let childX = 0, j = x;
        childX < srcGrid[0].length && j <= this.indexRight;
        childX++, j++
      ) {
        if (j < this.indexLeft) continue;
        this.grid[i][j] = srcGrid[childY][childX];
      }
    }

    return [
      Math.max(Math.min(x + srcGrid[0].length, this.indexRight), this.indexLeft),
      Math.max(Math.min(y + srcGrid.length, this.indexBottom), this.indexTop),
    ];
  }

  negotiateChildrenSize(): SizeWithLock[] {
    // TODO: come up with some test cases to verify this actually behaves right (sizes come out correct with various weights and limits, edge cases like fractional results, overflows, and leftover space)
    // TODO: dole out remainder
    const sizes = new Array(this.children.length);
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
        weightSum += this.children[j].sizeWeight;
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
        const child = this.children[j];
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
