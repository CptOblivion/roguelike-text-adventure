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
  public getCharacterAt(offset: number): CharacterWithStyle {
    return new CharacterWithStyle(
      this.rawText.charAt(offset),
      this.sections
        .filter((section) => section.start <= offset && section.end > offset)
        .map((section) => section.getStyles())
        .join(',\n'),
    );
  }

  public append(text: RichText): RichText {
    // TODO: merge sections with overlap
    console.log('appending');
    return new RichText(this.rawText + text.rawText, this.sections.concat(text.sections));
  }

  public substring(start: number, end: number = this.rawText.length): RichText {
    return new RichText(
      this.rawText.substring(start, end),
      // TODO: test this doesn't clip incorrectly
      this.sections.filter((section) => section.end > start && section.start <= end),
    );
  }

  public getLength(): number {
    return this.rawText.length;
  }
}

export class CharacterWithStyle {
  public character: string;
  public style: string;

  constructor(character: string, style: string) {
    if (character.length != 1) {
      throw new Error(`character initialized with invalid count: ${character.length}`);
    }
    this.character = character;
    this.style = style;
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
