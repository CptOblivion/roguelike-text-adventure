export class RichText {
  private rawText: string;
  private sections: RichTextSection[];

  private constructor(text: string, sections: RichTextSection[] = []) {
    this.rawText = text;
    this.sections = sections;
  }

  public static build(...sections: RichText[]): RichText {
    if (sections.length === 0) {
      return new RichText('');
    }

    return sections.reduce((previous, current) => previous.append(current), new RichText(''));
  }

  public static new(content: string, ...styles: RichTextInstantiator[]): RichText {
    return new RichText(
      content,
      styles.map((instantiator) => instantiator(0, content.length)),
    );
  }

  public getRawText(): string {
    return this.rawText;
  }

  // TODO: replace with a render(maxLineLength: ?number, substring: [number, ?number]),
  // truncates to substring, handles line wrapping (maybe?), outputs divs split into largest possible
  // given common css and broken across lines
  public getCharacterAt(offset: number): CharacterWithStyle {
    const styles = this.sections
      .filter((section) => section.start <= offset && section.end > offset)
      .map((section) => section.getStyles())
      .join(' ');
    return new CharacterWithStyle(this.rawText.charAt(offset), styles);
  }

  public append(text: RichText): RichText {
    // TODO: merge sections with overlap
    const sections = text.sections.map((section) => section.shifted(this.rawText.length));
    return new RichText(this.rawText + text.rawText, this.sections.concat(sections));
  }

  public substring(start: number, end: number = this.getLength()): RichText {
    return new RichText(
      this.rawText.substring(start, end),
      // TODO: test this doesn't clip incorrectly
      this.sections
        // only keep styles that overlap this substring
        .filter((section) => section.end > start && section.start <= end)
        .map((section) => {
          const newSection = section.shifted(-start);

          // styles shouldn't extend outside the string (or they'll risk bleeding into other text)
          if (newSection.start < 0) {
            newSection.start = 0;
          }

          if (newSection.end >= end - start) {
            newSection.end = end - start;
          }
          return newSection;
        }),
    );
  }

  public getLength(): number {
    return this.rawText.length;
  }

  public rows(): RichText[] {
    let offset = 0;
    const rows: RichText[] = [];
    let nextLine = this.rawText.indexOf('\n', offset);
    while (nextLine >= 0) {
      rows.push(this.substring(offset, nextLine));
      offset = nextLine + 1;
      nextLine = this.rawText.indexOf('\n', offset);
    }
    rows.push(this.substring(offset));
    return rows;
  }

  public lastIndexOf(searchString: string, position?: number): number {
    return this.rawText.lastIndexOf(searchString, position);
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

abstract class RichTextSection {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  public abstract getStyles(): string;

  public shifted(offset: number): this {
    const copy = Object.assign(this);
    copy.start += offset;
    copy.end += offset;
    return copy;
  }
}

type RichTextInstantiator = (x: number, y: number, ...args: any[]) => RichTextSection;

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
    debugger;
    return `color: ${this.color};`;
  }
}

export function richTextColor(color: RichTextColor): RichTextInstantiator {
  return (x: number, y: number) => new RichTextSectionColor(x, y, color);
}
