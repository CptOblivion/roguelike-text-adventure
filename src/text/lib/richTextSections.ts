import { EMPTY_FUNCTION, EmptyFunction } from '../../common';

export type RichTextInstantiator = (x: number, y: number, ...args: any[]) => RichTextSection;

export abstract class RichTextSection {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  public abstract getStyles(): string;

  public shifted(offset: number): RichTextSection {
    const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    copy.start += offset;
    copy.end += offset;
    return copy;
  }

  // mutates the element. Returns a cleanup function to undo the mutation.
  public mutateElem(elem: HTMLElement): EmptyFunction {
    return EMPTY_FUNCTION;
  }
}

export enum RichTextColor {
  RED = '#ff5454',
  GREEN = '#00ff00',
  BLUE = '#0000ff',
}

class RichTextSectionBold extends RichTextSection {
  public getStyles(): string {
    return 'font-weight: bold;';
  }
}

export function richTextBold(): RichTextInstantiator {
  return (x: number, y: number) => new RichTextSectionBold(x, y);
}

class RichTextSectionColor extends RichTextSection {
  public color: RichTextColor;
  constructor(start: number, end: number, color: RichTextColor) {
    super(start, end);
    this.color = color;
  }

  public getStyles(): string {
    return `color: ${this.color};`;
  }
}

export function richTextColor(color: RichTextColor): RichTextInstantiator {
  return (x: number, y: number) => new RichTextSectionColor(x, y, color);
}

class RichTextSectionClickable extends RichTextSection {
  public getStyles(): string {
    return '';
  }

  public mutateElem(elem: HTMLElement): () => void {
    // TODO: add a css module to create stylesheets and select :hovered instead of this
    // (but for now we're just testing adding and removing listeners)
    const listeners: Array<[string, () => void]> = [
      [
        'mouseenter',
        () => {
          elem.classList.add('hovered');
        },
      ],
      [
        'mouseleave',
        () => {
          elem.classList.remove('hovered');
        },
      ],
    ];

    for (const [event, listener] of listeners) {
      elem.addEventListener(event, listener);
    }

    return () => {
      for (const [event, listener] of listeners) {
        elem.removeEventListener(event, listener);
      }
    };
  }
}

export function richTextClickable(): RichTextInstantiator {
  return (x: number, y: number) => new RichTextSectionClickable(x, y);
}
