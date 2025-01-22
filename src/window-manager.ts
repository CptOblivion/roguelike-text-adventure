const corner = 'O';
const horiz = '-';
const vert = '|';

export class Sides {
  left: number;
  right: number;
  top: number;
  bottom: number;

  constructor(left: number = 0, right: number = 0, top: number = 0, bottom: number = 0) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}

export class Borders {
  left: string;
  right: string;
  top: string;
  bottom: string;
  corners: string;
  constructor(
    left: string = '',
    right: string = '',
    top: string = '',
    bottom: string = '',
    corners: string = ''
  ) {
    if (left.length > 1) {
      throw `Border constructor got string with invalid length ${left.length} for left: ${left}`;
    }
    if (right.length > 1) {
      throw `Border constructor got string with invalid length ${right.length} for right: ${right}`;
    }
    if (top.length > 1) {
      throw `Border constructor got string with invalid length ${top.length} for top: ${top}`;
    }
    if (bottom.length > 1) {
      throw `Border constructor got string with invalid length ${bottom.length} for bottom: ${bottom}`;
    }
    if (corners.length > 1) {
      throw `Border constructor got string with invalid length ${corners.length} for corners: ${corners}`;
    }
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.corners = corners;
  }
}

export class Window {
  width: number;
  height: number;
  margin: Sides;
  padding: Sides;
  borders: Borders;

  children: Window[];
  grid: string[][];

  constructor(
    width: number,
    height: number,
    borders?: Borders,
    margin: Sides = new Sides(),
    padding: Sides = new Sides()
  ) {
    this.margin = margin;
    this.padding = padding;
    this.borders = borders;
    this.resize(width, height);
    this.children = [];
  }

  get indexLeft(): number {
    return this.padding.left;
  }
  get indexRight(): number {
    return this.width - this.padding.right - 1;
  }
  get indexTop(): number {
    return this.padding.top;
  }
  get indexBottom(): number {
    return this.height - this.padding.bottom - 1;
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = new Array(height).fill([]);
    for (const i in this.grid) {
      this.grid[i] = new Array(width).fill(' ');
    }
  }

  fillFrame() {
    if (!this.borders) {
      return;
    }
    if (this.borders.left || this.borders.right) {
      for (let i = this.margin.top; i < this.height - this.margin.bottom; i++) {
        if (this.borders.left) {
          this.grid[i][this.margin.left] = this.borders.left;
        }
        if (this.borders.right) {
          this.grid[i][this.width - this.margin.right - 1] = this.borders.right;
        }
      }
    }
    if (this.borders.top || this.borders.bottom) {
      for (let i = this.margin.left; i < this.width - this.margin.right; i++) {
        if (this.borders.top) {
          this.grid[this.margin.top][i] = this.borders.top;
        }
        if (this.borders.bottom) {
          this.grid[this.height - this.margin.bottom - 1][i] = this.borders.bottom;
        }
      }
    }
    if (this.borders.corners) {
      this.grid[this.margin.top][this.margin.left] = this.borders.corners;
      this.grid[this.margin.top][this.width - this.margin.right - 1] = this.borders.corners;
      this.grid[this.height - this.margin.bottom - 1][this.margin.left] = this.borders.corners;
      this.grid[this.height - this.margin.bottom - 1][this.width - this.margin.right - 1] =
        this.borders.corners;
    }
  }

  update() {
    console.log('not implemented');
    for (const child of this.children) {
      child.update();
    }
  }

  blit(target) {}
}

export class WindowRoot extends Window {
  el: HTMLElement;

  constructor(el: HTMLElement, border: Borders, margin: Sides, padding: Sides) {
    super(0, 0, border, margin, padding);
    this.el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  _onWindowResize() {
    this._updateCanvasSize();
    this.fillFrame();
    this.draw();
  }

  _updateCanvasSize() {
    // I hate this
    this.el.innerHTML = 'X';
    const baseHeight = this.el.offsetHeight;
    // TODO: optimize (double character count until new height found, then binary search back?)
    for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') {}
    const heightTwoChars = this.el.offsetHeight;
    this.width = this.el.innerHTML.length - 1;
    this.height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(this.width, this.height);
  }

  draw() {
    this.update();
    this.el.innerHTML = this.grid.map((row) => row.map(fixSpaces).join('')).join('\n');
  }
}

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}
