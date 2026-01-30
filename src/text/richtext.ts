const EMPTY_FUNCTION = () => {};
type EmptyFunction = () => void;

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
    const sections = this.sections.filter(
      (section) => section.start <= offset && section.end > offset,
    );
    const styles = sections.map((section) => section.getStyles()).join(' ');

    const mutators = this.sections
      .map((section) => section.mutateElem)
      .filter((mutator) => mutator != null);
    return new CharacterWithStyle(this.rawText.charAt(offset), styles, mutators);
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
  public mutators: MutateElem[];

  constructor(character: string, style: string, mutators: MutateElem[]) {
    if (character.length != 1) {
      throw new Error(`character initialized with invalid count: ${character.length}`);
    }
    this.character = character;
    this.style = style;
    this.mutators = mutators;
  }
}

export enum RichTextColor {
  RED = '#ff5454',
  GREEN = '#00ff00',
  BLUE = '#0000ff',
}

type MutateElem = (elem: HTMLElement) => EmptyFunction;

abstract class RichTextSection {
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
        'mouseexit',
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
