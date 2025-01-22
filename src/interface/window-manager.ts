import { WindowBase, Grid } from './window';

export class WindowRoot extends WindowBase {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    super('--~~== root ==~~--');
    this.el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  _onWindowResize() {
    this._updateCanvasSize();
  }

  _updateCanvasSize() {
    // I hate this
    this.el.innerHTML = 'X';
    const baseHeight = this.el.offsetHeight;
    // TODO: optimize (double character count until new height found, then binary search back?)
    for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') {}
    const heightTwoChars = this.el.offsetHeight;
    const width = this.el.innerHTML.length - 1;
    const height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(width, height);
    this.update();
  }

  update(): Grid {
    this.grid = WindowBase.prototype.update.call(this);
    this.el.innerHTML = this.grid.map((row) => row.map(fixSpaces).join('')).join('\n');
    return this.grid;
  }
}

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}
