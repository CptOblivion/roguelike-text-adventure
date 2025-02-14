import { WindowBase } from './window';
import { ASCIICanvas } from './ascii-canvas';

export class WindowRoot extends WindowBase {
  private _el: HTMLElement;
  private static _instance: WindowRoot;
  private _drawing: boolean = false;
  private _redraw_queued: boolean = false;

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

  protected override async _update(): Promise<ASCIICanvas> {
    await super._update();
    // WindowBase.prototype._update.call(this);
    this._el.textContent = this._canvas.render();
    return this._canvas;
  }

  static redraw() {
    // TODO: actual redraw queue and batch, not... *gestures at this*
    // TODO: maybe while we're drawing to the screen, we should lock writes to canvases or something
    const instance = WindowRoot._instance;
    if (instance._drawing) {
      instance._redraw_queued = true;
      return;
    }
    instance._drawing = true;
    WindowRoot._instance._update().then(() => {
      instance._drawing = false;
      if (instance._redraw_queued) {
        // currently if we consistently queue the next redraw before the last one finished, I think we'll run out of stack
        WindowRoot.redraw();
      }
    });
  }
}
