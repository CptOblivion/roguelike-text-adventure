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

  // TODO: instead use tuples of request/response (or an object with those and addl. data)
  private messages: RichText[] = [];

  private fillRow: number = 0;
  private fillRowPosition: number = 0;
  private filling = false;

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
    const message = text(null);
    if (!this.filling) {
      // we don't want to set this if we're already in the middle of typing some older text
      this.fillRow = this.messages.length;
      this.fillRowPosition = 0;
    }

    this.setText(this.messages.concat([message]));

    if (delay === 0) {
      this.fillRow = this.messages.length;
      this.fillRowPosition = message.length;
      return;
    }

    // TODO: check if this can be a race condition
    // if we're already printing, let the existing interval keep going
    if (this.filling == true) {
      return;
    }

    this.filling = true;
    const intervalID = setInterval(() => {
      // TODO: parse markdown
      let numChars = 1;
      if (delay < 3) {
        // interval minimum is 4; special case for speeds faster than that
        // technically 3 should be 1.333..., (1, and then 2 every third interval); we're just ignoring that 'cuz 1 is close enough
        numChars = 4 / delay;
      }

      const message = this.messages[this.fillRow];

      this.fillRowPosition += numChars;
      if (this.fillRowPosition >= message.length) {
        this.fillRow++;
        this.fillRowPosition = 0;

        if (this.fillRow >= this.messages.length - 1) {
          this.fillRowPosition = message.length;
          clearInterval(intervalID);
          this.filling = false;
        }
      }

      if (this.fillDelay !== delay) {
        clearInterval(intervalID);
        this.filling = false;
        this.typeMessage(richText(''), this.fillDelay);
      }
      this.requestRedraw();
    }, delay);
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    super._update();

    const rendered = this.messages
      .map((message) => message.render(0, this.fillRowPosition, this.interiorWidth))
      .reduce((rows, row) => rows.concat(row), []);

    if (this.fillDirection === FillDirection.topDown) {
      for (let i = 0; i < rendered.length; i++) {
        const row = rendered[i];
        this._canvas.writeRichText([row], [this.indexLeft, this.indexTop + i]);
      }
    } else {
      for (let i = 0; i < rendered.length; i++) {
        const row = rendered[rendered.length - 1 - i];
        this._canvas.writeRichText([row], [this.indexLeft, this.indexBottom - i]);
      }
    }
    return this._canvas;
  }
}
