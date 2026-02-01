import { RichTextInstantiator, RichTextSection, IRichText } from './richTextCommon';
import { CharacterWithStyle } from './characterWithStyle';

function sum(a, b): number {
  return a + b;
}

/**
 * REFACTOR:
 *  * new should take either a string or an array of text objects, and a list of style instantiators
 *  *
 */

export class RichText implements IRichText {
  private text?: string;
  private sections: RichTextSection[];
  private children: RichText[] = [];

  // private _length: number;
  public get length(): number {
    // TODO: calcualte at instantiation, and if a child changes it should bubble up and store the result
    // return this._length;
    if (this.children.length === 0) {
      return this.text.length;
    }
    return this.children.map((child) => child.length).reduce(sum, 0);
  }

  private constructor(content: string | RichText[], styles?: RichTextInstantiator[]) {
    if (typeof content === 'string') {
      this.text = content;
    } else {
      this.children = content;
    }

    const sections = styles?.map((instantiator) => instantiator([0, content.length, this])) ?? [];
    this.sections = sections;
  }

  public static build(...sections: RichText[]): RichText {
    if (sections.length === 0) {
      return new RichText('');
    }

    return sections.reduce((previous, current) => previous.append(current), new RichText(''));
  }

  public static new(content: string | RichText[], ...styles: RichTextInstantiator[]): RichText {
    return new RichText(content, styles);
  }

  public redraw(): void {
    console.log('requesting redraw');
    // TODO: actually trigger redraw
  }

  public getRawText(): string {
    if (this.children.length === 0) {
      return this.text;
    }
    return this.children.map((child) => child.getRawText()).join('');
  }

  // TODO: replace with a render(maxLineLength: ?number, substring: [number, ?number]),
  // TODO: handle line wrap in render
  public getCharacterAt(offset: number): CharacterWithStyle {
    const sections = this.sections.filter(
      (section) => section.start <= offset && section.end > offset,
    );
    const styles = sections.map((section) => section.getStyles()).join(' ');

    if (this.children.length === 0) {
      return new CharacterWithStyle(this.text.charAt(offset), styles);
    }

    // traverse children, to find the character at the index we're looking for
    throw new Error('not yet implemented');
  }

  // MARKED FOR DELETION
  public append(text: RichText): RichText {
    // TODO: merge sections with overlap
    const sections = text.sections.map((section) => section.shifted(this.length));
    return new RichText(this.getRawText() + text.getRawText(), this.sections.concat(sections));
  }

  public substring(start: number, end: number = this.length): RichText {
    return new RichText(
      this.getRawText().substring(start, end),
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

  public rows(): RichText[] {
    let offset = 0;
    const rows: RichText[] = [];
    let nextLine = this.getRawText().indexOf('\n', offset);
    while (nextLine >= 0) {
      rows.push(this.substring(offset, nextLine));
      offset = nextLine + 1;
      nextLine = this.getRawText().indexOf('\n', offset);
    }
    rows.push(this.substring(offset));
    return rows;
  }

  public lastIndexOf(searchString: string, position?: number): number {
    return this.getRawText().lastIndexOf(searchString, position);
  }
}
