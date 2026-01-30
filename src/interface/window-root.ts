import { WindowBase } from './window';
import { ASCIICanvas } from './ascii-canvas';

const ROW_STYLE = `
display: flex;
flex-direction: row;
`;

export class WindowRoot extends WindowBase {
  private _el: HTMLElement;
  private static _instance: WindowRoot;
  private _drawing: boolean = false;
  private _redraw_queued: boolean = false;

  private htmlGrid: HTMLElement;

  constructor(el: HTMLElement) {
    if (WindowRoot._instance !== undefined) {
      throw 'attempted to create a new window root when one already exists!';
    }
    super('root');
    WindowRoot._instance = this;
    WindowBase.redraw = this._redrawRoot;
    this.htmlGrid = document.createElement('div');
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
    for (; this._el.offsetHeight === baseHeight; this._el.innerHTML += 'X') {}
    const heightTwoChars = this._el.offsetHeight;

    const width = this._el.innerHTML.length - 1;
    const height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(width, height);
    const children: Array<HTMLElement> = [];
    for (let y = 0; y < height; y++) {
      const row = document.createElement('div');
      row.style = ROW_STYLE;
      children.push(row);
      for (let x = 0; x < width; x++) {
        row.append(document.createElement('div'));
      }
    }

    this.htmlGrid.replaceChildren(...children);
    this._el.replaceChildren(this.htmlGrid);

    this._update();
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await super._update();
    const canvas = this._canvas.render();
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const char = canvas[y][x];
        this.htmlGrid.children[y].children[x].textContent = char.character;
      }
    }
    return this._canvas;
  }

  _redrawRoot() {
    // TODO: actual redraw queue and batch, not... *gestures at this*
    // TODO: maybe while we're drawing to the screen, we should lock writes to canvases or something
    const instance = WindowRoot._instance;
    if (instance._drawing) {
      instance._redraw_queued = true;
      return;
    }
    instance._drawing = true;
    instance._redraw_queued = false;
    WindowRoot._instance._update().then(() => {
      instance._drawing = false;
      if (instance._redraw_queued) {
        // currently if we consistently queue the next redraw before the last one finished, I think we'll run out of stack
        WindowRoot.redraw();
      }
    });
  }
}
