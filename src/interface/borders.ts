export class Borders {
  left: string;
  right: string;
  top: string;
  bottom: string;
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  constructor(
    left: string = '',
    right: string = '',
    top: string = '',
    bottom: string = '',
    topLeft: string = '',
    topRight: string = '',
    bottomLeft: string = '',
    bottomRight: string = ''
  ) {
    this.left = left.substring(0, 1);
    this.right = right.substring(0, 1);
    this.top = top.substring(0, 1);
    this.bottom = bottom.substring(0, 1);
    this.topLeft = topLeft.substring(0, 1);
    this.topRight = topRight.substring(0, 1);
    this.bottomLeft = bottomLeft.substring(0, 1);
    this.bottomRight = bottomRight.substring(0, 1);
  }
}

// a handful of handy presets
export const BORDER_INVISIBLE_TOP = new Borders('', '', ' ', '', '', '', '', '');
export const BORDER_SINGLE = new Borders('│', '│', '─', '─', '┌', '┐', '└', '┘');
export const BORDER_DOUBLE = new Borders('║', '║', '═', '═', '╔', '╗', '╚', '╝');
export const BORDER_DOUBLE_SINGLE = new Borders('║', '║', '─', '─', '╓', '╖', '╙', '╜');
export const BORDER_SINGLE_DOUBLE = new Borders('│', '│', '═', '═', '╒', '╕', '╘', '╛');

export class Sides {
  left: number;
  right: number;
  top: number;
  bottom: number;

  constructor(left: number = 0, right: number = 0, top: number = 0, bottom: number = 0) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}
