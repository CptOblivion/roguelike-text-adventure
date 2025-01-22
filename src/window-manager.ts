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
    this.draw();
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

  draw() {
    this.update(this.width, this.height);
    this.el.innerHTML = this.grid.map((row) => row.map(fixSpaces).join('')).join('\n');
  }
}

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}
