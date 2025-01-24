import { WindowBase } from './window';
import { ASCIICanvas } from './ascii-canvas';

export class WindowRoot extends WindowBase {
  private _el: HTMLElement;
  private static _instance: WindowRoot;

  constructor(el: HTMLElement) {
    if (WindowRoot._instance !== undefined) {
      throw 'attempted to create a new window root when one already exists!';
    }
    super('root');
    WindowRoot._instance = this;
    this._el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  private _onWindowResize() {
    this._updateCanvasSize();
  }

  private _updateCanvasSize() {
    // I hate this
    this._el.innerHTML = 'X';
    const baseHeight = this._el.offsetHeight;
    // TODO: optimize (double character count until new height found, then binary search back?)
    for (; this._el.offsetHeight === baseHeight; this._el.innerHTML += 'X') {
      // debug: change the function to async and enable the following line to watch the update go
      // await new Promise((r) => setTimeout(r, 20));
    }
    const heightTwoChars = this._el.offsetHeight;
    const width = this._el.innerHTML.length - 1;
    const height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(width, height);
    this._update();
  }

  protected override _update(): ASCIICanvas {
    super._update();
    // WindowBase.prototype._update.call(this);
    this._el.innerHTML = this._canvas.render();
    return this._canvas;
  }

  static redraw() {
    // TODO: batch redraws if they come in too fast
    // TODO: probably want drawing to be non-blocking
    WindowRoot._instance._update();
  }
}
