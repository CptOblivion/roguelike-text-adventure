import { ASCIICanvas } from './ascii-canvas';
import { WindowBase } from './window';
import { TextDisplay } from '../common';
import { RichText } from '../text/richtext';

export enum FillDirection {
  topDown = 0,
  bottomUp = 1,
}

export class WindowText extends WindowBase implements TextDisplay {
  // TODO: with word wrap, this will be wrong
  fillDirection: FillDirection = FillDirection.topDown;
  fillDelay: number = 5;

  private _text: RichText = RichText.new('');

  private _fillOffset: number = 0;
  private _filling = false;

  /**
   * directly set text rendered
   * ignores fillDelay
   * @param text
   */
  setText(text: RichText) {
    // TODO: word wrap
    this._text = text;
    this.changed = true;
    this.requestRedraw();
  }

  /**
   * appends text
   * does not begin on a new line
   * @param text
   */
  addText(text: RichText) {
    this._typeText(text, this.fillDelay);
  }

  /**
   * appends text
   * begins on a new line
   * @param text
   */
  addLine(text: RichText) {
    this.addText(RichText.new('\n').append(text));
  }

  submitMessage(message: string) {
    // TODO: option to skip typing
    // TODO: make message be RichText
    this.addLine(RichText.new(message));
  }

  private _typeText(text: RichText, delay: number) {
    if (!this._filling) {
      // we don't want to set this if we're already in the middle of typing some older text
      this._fillOffset = this._text.getLength();
    }

    this.setText(this._text.append(text));

    if (delay == 0) {
      this._fillOffset = this._text.getLength();
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
      if (this._fillOffset >= this._text.getLength()) {
        this._fillOffset = this._text.getLength();
        clearInterval(intervalID);
        this._filling = false;
      }

      if (this.fillDelay !== delay) {
        clearInterval(intervalID);
        this._filling = false;
        this._typeText(RichText.new(''), this.fillDelay);
      }
      this.requestRedraw();
    }, delay);
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    super._update();
    const wrappedText = this.wrapText(this._text.substring(0, this._fillOffset));

    if (this.fillDirection === FillDirection.topDown) {
      for (let i = 0; i < wrappedText.length; i++) {
        const row = wrappedText[i];
        this._canvas.writeRichText(row, [this.indexLeft, this.indexTop + i]);
      }
    } else {
      for (let i = 0; i < wrappedText.length; i++) {
        const row = wrappedText[wrappedText.length - 1 - i];
        this._canvas.writeRichText(row, [this.indexLeft, this.indexBottom - i]);
      }
    }
    return this._canvas;
  }

  private wrapText(text: RichText): RichText[] {
    const rows = [];

    for (const row of text.rows()) {
      let currentRow = row;
      while (currentRow.getLength() > this.interiorWidth) {
        // find the last space before the screen breaks
        const breakIndex = currentRow.lastIndexOf(' ', this.interiorWidth);
        const newRow = (() => {
          if (breakIndex === -1) {
            // word was longer than the width of the screen, split it with a hyphen
            return currentRow.substring(0, this.interiorWidth - 2).append(RichText.new('-'));
          }
          return currentRow.substring(0, breakIndex);
        })();
        rows.push(newRow);
        // indent wrapped rows
        currentRow = RichText.new('  ').append(currentRow.substring(newRow.getLength() + 1));
      }
      // add the remainder
      rows.push(currentRow);
    }
    return rows;
  }
}
