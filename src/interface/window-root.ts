import { WindowBase } from './window';
import { ASCIICanvas } from './ascii-canvas';
import { diffDivs } from '../common/common';

const ROW_STYLE = 'display: flex; flex-direction: row;';

const FRAMERATE = (1 / 30) * 1000;

export class WindowRoot extends WindowBase {
  private el: HTMLElement;
  private static instance: WindowRoot;
  private drawing: boolean = false;
  private redraw_queued: boolean = false;
  private redrawCooldown: boolean = false;

  private htmlGrid: HTMLElement;

  constructor(el: HTMLElement) {
    if (WindowRoot.instance !== undefined) {
      throw 'attempted to create a new window root when one already exists!';
    }
    super('root');
    WindowRoot.instance = this;
    WindowBase.redraw = this.queueRedrawRoot;
    this.htmlGrid = document.createElement('div');
    this.el = el;
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  private _onWindowResize() {
    this._updateCanvasSize();
  }

  private _updateCanvasSize() {
    // I hate this
    this.el.innerHTML = 'X';
    const baseHeight = this.el.offsetHeight;
    // TODO: optimize (double character count until new height found, then binary search back?)
    for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') {}
    const heightTwoChars = this.el.offsetHeight;

    const width = this.el.innerHTML.length - 1;
    const height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
    this.resize(width, height);
    const children: Array<HTMLElement> = [];
    for (let y = 0; y < height; y++) {
      const row = document.createElement('div');
      row.style = ROW_STYLE;
      children.push(row);
      for (let x = 0; x < width; x++) {
        const char = document.createElement('div');
        char.textContent = ' ';
        row.append(char);
      }
    }

    this.htmlGrid.replaceChildren(...children);
    this.el.replaceChildren(this.htmlGrid);

    this._update();
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await super._update();

    const canvas = this._canvas.render();

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const newChar = canvas[y][x];
        const oldChar = this.htmlGrid.children[y].children[x] as HTMLElement;
        if (
          !diffDivs(oldChar, newChar)
          // TODO: diff event listners somehow, or just let the renderer declare a component as changed
        ) {
          this.htmlGrid.children[y].replaceChild(newChar, oldChar);
        }
      }
    }
    return this._canvas;
  }

  queueRedrawRoot() {
    // TODO: actual redraw queue and batch, not... *gestures at this*
    // TODO: maybe while we're drawing to the screen, we should lock writes to canvases or something
    if (WindowRoot.instance.drawing || WindowRoot.instance.redrawCooldown) {
      WindowRoot.instance.redraw_queued = true;
      return;
    }

    // timeout with no duration to allow additional blocking changes to complete before redraw triggers
    // e.g. mouseenter after mouseleave should render on the same frame
    setTimeout(WindowRoot.startRedrawRoot);
  }

  static queueRedrawNextFrame() {
    WindowRoot.instance.redrawCooldown = false;
    if (WindowRoot.instance.redraw_queued) {
      WindowRoot.startRedrawRoot();
    }
  }

  static startRedrawRoot() {
    WindowRoot.instance.redrawCooldown = true;
    // once render is started, let additional renders accumulate for the duration of a frame
    setTimeout(WindowRoot.queueRedrawNextFrame, FRAMERATE);

    WindowRoot.instance.drawing = true;
    WindowRoot.instance.redraw_queued = false;
    WindowRoot.instance._update().then(WindowRoot.finishRedrawRoot);
  }

  static finishRedrawRoot() {
    WindowRoot.instance.drawing = false;
  }
}
