import { Borders, Sides } from './borders';

enum ChildrenDirections {
  horizontal = 0,
  vertical = 1,
}

export class Window {
  width: number = 0;
  height: number = 0;
  margin: Sides = new Sides();
  padding: Sides = new Sides();
  borders: Borders;

  sizeMin: number;
  sizeMax: number;
  sizeWeight: number = 1;

  children: Window[] = [];
  childrenDirection: ChildrenDirections = 0;
  grid: string[][] = [];
  _lastWidth: number;
  _lastHeight: number;

  get indexLeft(): number {
    return this.padding.left + (this.borders.left ? 1 : 0);
  }
  get indexRight(): number {
    return this.width - this.padding.right - (this.borders.right ? 1 : 0) - 1;
  }
  get indexTop(): number {
    return this.padding.top + (this.borders.top ? 1 : 0);
  }
  get indexBottom(): number {
    return this.height - this.padding.bottom - (this.borders.bottom ? 1 : 0) - 1;
  }

  /**
   * Populates the border around the frame
   */
  fillBorder() {
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
        if (this.borders.top) {
          this.grid[this.margin.top][i] = this.borders.top;
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

  /**
   * Resizes the frame
   *
   * @returns true if the size changed
   */
  resize(width: number, height: number): boolean {
    if (this.width == width && this.height == height) {
      return false;
    }
    this.width = width;
    this.height = height;
    this.grid = new Array(height).fill([]);
    for (const i in this.grid) {
      this.grid[i] = new Array(width).fill(' ');
    }
    this.fillBorder();
    return true;
  }

  update(width: number, height: number, force = false): string[][] {
    if (!force && !this.resize(width, height)) return this.grid;
    this.fillBorder();
    console.log('not implemented yet');

    // negotiate size for children
    // pass final values to child in update
    for (const child of this.children) {
      // TODO: blit child grid into this.grid
      child.update(width, height, force);
    }
    return this.grid;
  }

  addChild(child) {
    this.children.push(child);
  }
}
