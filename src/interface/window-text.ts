import { ASCIICanvas } from './ascii-canvas';
import { WindowBase } from './window';
import { TextDisplay } from '../common';

export enum FillDirection {
  topDown = 0,
  bottomUp = 1,
}

export class WindowText extends WindowBase implements TextDisplay {
  textHeight: number = 0;
  fillDirection: FillDirection = FillDirection.topDown;
  fillDelay: number = 5;

  private _text: string = '';
  private _fillText: string = '';
  private _filling = false;

  /**
   * directly set text rendered
   * ignores fillDelay
   * @param text
   */
  setText(text: string) {
    this._text = text;
    this.textHeight = (text.match(/\n/g) || []).length;
    this.changed = true;
    this.requestRedraw();
  }

  /**
   * appends text
   * does not begin on a new line
   * @param text
   */
  addText(text: string) {
    this._typeText(text, this.fillDelay);
  }

  /**
   * appends text
   * begins on a new line
   * @param text
   */
  addLine(text: string) {
    this.addText('\n' + text);
  }

  submitMessage(message: string) {
    // TODO: option to skip typing
    this.addLine(message);
  }

  private _typeText(text: string, delay: number) {
    if (delay == 0) {
      this.setText(this._text + text);
      return;
    }
    // TODO: check if this can be a race condition
    this._fillText += text;
    if (this._filling == true) {
      return;
    }
    this._filling = true;
    const intervalID = setInterval(() => {
      // TODO: parse markdown
      let numChars = 1;
      if (delay < 3) {
        // interval minimum is 4; special case for speeds faster than that
        // technically 3 should be 1.333..., (1, and then 2 every third interval); we're just ignoring that 'cuz 1 is close enough
        numChars = 4 / delay;
      }
      this.setText(this._text + this._fillText.substring(0, numChars));
      // TODO maybe we should just move a pointer instead of constantly making substrings
      this._fillText = this._fillText.substring(numChars);
      if (this._fillText === '') {
        clearInterval(intervalID);
        this._filling = false;
      }
      if (this.fillDelay !== delay) {
        clearInterval(intervalID);
        this._filling = false;
        this._typeText('', this.fillDelay);
      }
    }, delay);
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    super._update();
    if (this.fillDirection === FillDirection.topDown) {
      this._canvas.writeString(this._text, [this.indexLeft, this.indexTop]);
    } else {
      this._canvas.writeString(this._text, [this.indexLeft, this.indexBottom - this.textHeight]);
    }
    return this._canvas;
  }
}
