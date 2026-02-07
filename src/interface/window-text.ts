import { ASCIICanvas } from './ascii-canvas';
import { WindowBase } from './window';
import { TextDisplay } from '../common/common';
import { CharacterWithStyle, richText, RichText, RichTextInstantiator } from '../text/richText';

export enum FillDirection {
  topDown = 0,
  bottomUp = 1,
}

export class WindowText extends WindowBase implements TextDisplay {
  // TODO: with word wrap, this will be wrong
  fillDirection: FillDirection = FillDirection.topDown;
  fillDelay: number = 5;

  // TODO: instead use tuples of request/response (or an object with those and addl. data)
  // maybe fillDelay should go in the message, so they can be variable speed (for suspense)
  private messages: RichText[] = [];

  private fillMessageIndex: number = 0;
  private fillRowPosition: number = 0;
  private filling = false;

  /**
   * directly set text rendered
   * ignores fillDelay
   * @param messages
   */
  setText(messages: RichText[]) {
    // TODO: word wrap
    for (let i = 0; i < messages.length; i++) {
      messages[i].registerRedraw(this.requestRedraw);
    }
    this.messages = messages;
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
      this.fillMessageIndex = this.messages.length;
      this.fillRowPosition = 0;
    }

    this.setText(this.messages.concat([message]));

    if (delay === 0) {
      this.fillMessageIndex = this.messages.length;
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
      let incrementCharCount = 1;
      if (delay < 3) {
        // interval minimum is 4; special case for speeds faster than that
        // technically 3 should be 1.333..., (1, and then 2 every third interval); we're just ignoring that 'cuz 1 is close enough
        incrementCharCount = 4 / delay;
      }

      const message = this.messages[this.fillMessageIndex];

      this.fillRowPosition += incrementCharCount;
      if (this.fillRowPosition >= message.length) {
        this.fillMessageIndex++;
        this.fillRowPosition = 0;

        if (this.fillMessageIndex >= this.messages.length) {
          this.fillRowPosition = message.length;
          clearInterval(intervalID);
          this.filling = false;
        }
      }

      if (this.fillDelay !== delay) {
        clearInterval(intervalID);
        this.filling = false;
        // TODO: this is a gross hack to retrigger the interval with a new delay
        this.typeMessage(richText(''), this.fillDelay);
      }

      this.requestRedraw();
    }, delay);
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    super._update();

    const rows: CharacterWithStyle[][] = [];
    for (let i = 0; i < this.messages.length || i < this.fillMessageIndex; i++) {
      const message = this.messages[i];
      const limit = i === this.fillMessageIndex ? this.fillRowPosition : undefined;
      rows.push(...message.render(0, limit, this.interiorWidth));
    }

    if (this.fillDirection === FillDirection.topDown) {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        this._canvas.writeRichText([row], [this.indexLeft, this.indexTop + i]);
      }
    } else {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[rows.length - 1 - i];
        this._canvas.writeRichText([row], [this.indexLeft, this.indexBottom - i]);
      }
    }
    return this._canvas;
  }
}
