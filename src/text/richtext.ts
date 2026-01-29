export class RichText {
  private rawText: string;
  private sections: RichTextSection[];

  constructor(text: string, sections: RichTextSection[]) {
    this.rawText = text;
    this.sections = sections;
  }

  public getRawText(): string {
    return this.rawText;
  }

  // TODO: replace with a render(maxLineLength: ?number, substring: [number, ?number]),
  // truncates to substring, handles line wrapping, outputs divs split into largest possible
  // given common css and broken across lines
  public getCharacterAt(offset: number): [character: string, css: string] {
    return [
      this.rawText[offset],
      this.sections
        .filter((section) => section.start <= offset && section.end > offset)
        .map((section) => section.getStyles())
        .join(',\n'),
    ];
  }
}

export enum RichTextColor {
  RED = 0xff0000,
  GREEN = 0x00ff00,
  BLUE = 0x0000ff,
}

export abstract class RichTextSection {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  public abstract getStyles(): string;
}

export class RichTextSectionBold extends RichTextSection {
  public getStyles(): string {
    return 'font-weight: bold';
  }
}

export class RichTextSectionColor extends RichTextSection {
  public color: RichTextColor;
  constructor(start: number, end: number, color: RichTextColor) {
    super(start, end);
    this.color = color;
  }

  public getStyles(): string {
    return `color: ${this.color}`;
  }
}
