import { ASCIICanvas } from './ascii-canvas';
import { WindowBase } from './window';
import { TextDisplay } from '../common/common';
import { richText, RichText, RichTextInstantiator } from '../text/richText';

export enum FillDirection {
  topDown = 0,
  bottomUp = 1,
}

export class WindowText extends WindowBase implements TextDisplay {
  // TODO: with word wrap, this will be wrong
  fillDirection: FillDirection = FillDirection.topDown;
  fillDelay: number = 5;

  private messages: RichText[] = [];

  private _fillOffset: number = 0;
  private _filling = false;

  /**
   * directly set text rendered
   * ignores fillDelay
   * @param text
   */
  setText(text: RichText[]) {
    // TODO: word wrap
    this.messages = text;
    this.changed = true;
    this.requestRedraw();
  }

  /**
   * appends text
   * begins on a new line
   * @param text
   */
  addMessage(text: RichTextInstantiator) {
    this.typeMessage(text, this.fillDelay);
  }

  // TODO: remove
  submitMessageString(message: string) {
    // TODO: option to skip typing
    // TODO: make message be RichText
    this.addMessage(richText(message));
  }

  private typeMessage(text: RichTextInstantiator, delay: number) {
    if (!this._filling) {
      // we don't want to set this if we're already in the middle of typing some older text
      this._fillOffset = this.messages.length;
    }

    const message = text(null);

    this.setText(this.messages.concat([message]));

    if (delay == 0) {
      this._fillOffset = this.messages.length;
      return;
    }

    // TODO: check if this can be a race condition
    // if we're already typing, let the existing interval keep going
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

      this._fillOffset += numChars;
      if (this._fillOffset >= this.messages.length) {
        this._fillOffset = this.messages.length;
        clearInterval(intervalID);
        this._filling = false;
      }

      if (this.fillDelay !== delay) {
        clearInterval(intervalID);
        this._filling = false;
        this.typeMessage(richText(''), this.fillDelay);
      }
      this.requestRedraw();
    }, delay);
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    super._update();

    const rendered = this.messages.map((message) =>
      message.render(0, this._fillOffset, this.interiorWidth),
    );

    if (this.fillDirection === FillDirection.topDown) {
      for (let i = 0; i < rendered.length; i++) {
        const row = rendered[i];
        this._canvas.writeRichText(row, [this.indexLeft, this.indexTop + i]);
      }
    } else {
      for (let i = 0; i < rendered.length; i++) {
        const row = rendered[rendered.length - 1 - i];
        this._canvas.writeRichText(row, [this.indexLeft, this.indexBottom - i]);
      }
    }
    return this._canvas;
  }
}
