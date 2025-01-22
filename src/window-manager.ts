const corner = 'O';
const horiz = '-';
const vert = '|';

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}

export class Window {
  grid: string[][];
  width: number;
  height: number;
  children: Window[];

  constructor(width: number, height: number) {
    this.resize(width, height);
    this.children = [];
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
    this.grid[0][0] = corner;
    this.grid[0][this.width - 1] = corner;
    this.grid[this.height - 1][0] = corner;
    this.grid[this.height - 1][this.width - 1] = corner;
    for (let i = 1; i < this.width - 1; i++) {
      this.grid[0][i] = horiz;
      this.grid[this.height - 1][i] = horiz;
    }
    for (let i = 1; i < this.height - 1; i++) {
      this.grid[i][0] = vert;
      this.grid[i][this.width - 1] = vert;
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

  constructor(el: HTMLElement) {
    super(0, 0);
    this.el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  _onWindowResize() {
    this._seekWidth();
    this.fillFrame();
    this.draw();
  }

  _seekWidth() {
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
