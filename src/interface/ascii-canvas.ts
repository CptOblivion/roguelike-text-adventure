import { Position } from '../common';
import { CharacterWithStyle, RichText } from '../text/richtext';

export class ASCIICanvas {
  width: number = 0;
  height: number = 0;
  private _canvas: CharacterWithStyle[][] = new Array();

  clear() {
    this._canvas = new Array(this.height).fill(undefined);
    for (const i in this._canvas) {
      this._canvas[i] = new Array(this.width).fill(' ');
    }
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.clear();
  }

  checkBounds([x, y]: Position): boolean {
    if (this._canvas === undefined) return false;
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }
    return true;
  }

  getAt(x: number, y: number): CharacterWithStyle {
    if (!this.checkBounds([x, y])) return undefined;
    return this._canvas[y][x];
  }

  setAt(value: CharacterWithStyle | string, position: Position) {
    let character: CharacterWithStyle = (() => {
      if (typeof value !== 'string') {
        return value;
      }
      return new CharacterWithStyle(value, '');
    })();

    if (!this.checkBounds(position)) return;
    this._canvas[position[1]][position[0]] = character;
  }

  clamp([x, y]: Position): Position {
    return [Math.max(Math.min(x, this.width), 0), Math.max(Math.min(y, this.height), 0)];
  }

  /**
   * @param srcGrid source to blit into this canvas
   * @param position top left corner offset
   */
  blit(srcGrid: ASCIICanvas, position: Position) {
    if (srcGrid.width === 0 || srcGrid.height === 0) {
      return;
    }

    for (let srcX = 0, x = position[0]; srcX < srcGrid.width && x <= this.width; srcX++, x++) {
      if (x < 0) continue;
      for (let srcY = 0, y = position[1]; srcY < srcGrid.height && y < this.height; srcY++, y++) {
        if (y < 0) continue;
        this.setAt(srcGrid.getAt(srcX, srcY), [x, y]);
      }
    }
  }

  writeRichText(src: RichText, [x, y]: Position) {
    const rows = src.rows();
    for (let offsY = 0; offsY < rows.length; offsY++) {
      for (let offsX = 0; offsX < rows[offsY].getLength(); offsX++) {
        this.setAt(rows[offsY].getCharacterAt(offsX), [x + offsX, y + offsY]);
      }
    }
  }

  render(): string {
    // TODO: redesign window-root to be a 2d array of divs
    // that rebuilds itself on resize
    // then render can be a blit that spits a letter into each div and updates the css
    const output = this._canvas.map((row) => row.map((char) => char.character).join('')).join('\n');
    return output;
  }
}
