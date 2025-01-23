import { WindowBase } from './window';
import { ASCIICanvas } from './ascii-canvas';

export class WindowRoot extends WindowBase {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    super('root');
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
    for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') {
      // debug: change the function to async and enable the following line to watch the update go
      // await new Promise((r) => setTimeout(r, 20));
    }
    const heightTwoChars = this.el.offsetHeight;
    const width = this.el.innerHTML.length - 1;
    const height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(width, height);
    this.update();
  }

  update(): ASCIICanvas {
    WindowBase.prototype.update.call(this);
    this.el.innerHTML = this.canvas.render();
    return this.canvas;
  }
}
