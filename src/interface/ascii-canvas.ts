import { Position } from '../common';

export class ASCIICanvas {
  _grid: string[][] = new Array();
  width: number = 0;
  height: number = 0;

  clear() {
    this._grid = new Array(this.height).fill(undefined);
    for (const i in this._grid) {
      this._grid[i] = new Array(this.width).fill(' ');
    }
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.clear();
  }

  checkBounds([x, y]: Position): boolean {
    if (this._grid === undefined) return false;
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }
    return true;
  }

  getAt(x: number, y: number): string {
    if (!this.checkBounds([x, y])) return undefined;
    return this._grid[y][x];
  }

  setAt(value: string, position: Position) {
    if (!this.checkBounds(position)) return;
    this._grid[position[1]][position[0]] = value;
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

  writeString(src: string, [x, y]: Position) {
    const textRows = src.split('\n');
    for (let offsY = 0; offsY < textRows.length; offsY++) {
      // TODO: process markdown (colors, links, etc)
      for (let offsX = 0; offsX < textRows[offsY].length; offsX++) {
        this.setAt(textRows[offsY][offsX], [x + offsX, y + offsY]);
      }
    }
  }

  render(): string {
    return this._grid.map((row) => row.map(fixSpaces).join('')).join('\n');
  }
}

function fixSpaces(char): string {
  if (char === ' ') return '&nbsp';
  return char;
}
