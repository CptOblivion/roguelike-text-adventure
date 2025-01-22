import { Borders, Sides } from './borders';
import { Window } from './windows';

export class WindowRoot extends Window {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    super();
    this.el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  _onWindowResize() {
    this._updateCanvasSize();
    this.update(this.width, this.height);
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
  }

  update(width: number, height: number, force = false): string[][] {
    this.grid = Window.prototype.update.call(this, this.width, this.height, force);
    this.el.innerHTML = this.grid.map((row) => row.map(fixSpaces).join('')).join('\n');
    return this.grid;
  }
}

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}
