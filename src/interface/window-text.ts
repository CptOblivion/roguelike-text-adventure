import { ASCIICanvas } from './ascii-canvas';
import { WindowBase } from './window';

export enum FillDirection {
  topDown = 0,
  bottomUp = 1,
}

export class WindowText extends WindowBase {
  _text: string = '';
  textHeight: number = 0;
  fillDirection: FillDirection = FillDirection.topDown;
  update(): ASCIICanvas {
    this.canvas.clear();
    WindowBase.prototype.update.call(this);
    if (this.fillDirection === FillDirection.topDown) {
      this.canvas.writeString(this._text, [this.indexLeft, this.indexTop]);
    } else {
      this.canvas.writeString(this._text, [this.indexLeft, this.indexBottom - this.textHeight]);
    }
    return this.canvas;
  }

  setText(text: string) {
    this._text = text;
    this.textHeight = (text.match(/\n/g) || []).length;
    this.changed = true;
    // TODO: trigger re-render up the chain
  }
}
