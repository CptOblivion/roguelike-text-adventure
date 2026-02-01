import { RichTextSectionInstantiator, RichTextSection, IRichText } from './richTextCommon';
import { CharacterWithStyle } from './characterWithStyle';
import { nullThrows } from '../../common';

export type RichTextInstantiator = (parent: RichText | null) => RichText;

export function richText(
  content: string | RichTextInstantiator[],
  styles?: RichTextSectionInstantiator[],
): RichTextInstantiator {
  return (parent: RichText | null) => new RichText(parent, content, styles);
}

export class RichText implements IRichText {
  private rawText: string;
  private styles: RichTextSection[];
  private parent: RichText | null;
  private children: RichText[] = [];

  private hasChildren(): boolean {
    return this.children != null && this.children.length !== 0;
  }

  public get length(): number {
    return this.rawText.length;
  }

  public constructor(
    parent: RichText | null,
    content: string | RichTextInstantiator[],
    styles?: RichTextSectionInstantiator[],
  ) {
    this.styles = styles?.map((instantiator) => instantiator([this])) ?? [];
    this.parent = parent;

    if (typeof content === 'string') {
      this.rawText = content;
    } else {
      this.children = (content as RichTextInstantiator[]).map((instantiator) => instantiator(this));
      this.update();
    }
  }

  public redraw(): void {
    console.log('requesting redraw');
    // TODO: actually trigger redraw
  }

  public getRawText(): string {
    if (!this.hasChildren()) {
      return this.rawText;
    }
    return this.children.map((child) => child.getRawText()).join('');
  }

  // TODO: delete this, render should return a virtual dom tree
  // then the window can diff the virtual dom and make changes to the real dom
  private renderAtIndex(index: number): CharacterWithStyle | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const styles = this.styles.map((section) => section.getStyles()).join(' ');
    if (!this.hasChildren()) {
      return new CharacterWithStyle(this.rawText.charAt(index), styles);
    }

    let offset = 0;
    for (const child of this.children) {
      if (index + child.length >= index) {
        const out = nullThrows(child.renderAtIndex(index - offset));
        out.style = this.styles + out.style;
        return out;
      }
    }

    // shouldn't be possible to get here, so make noise if we do
    throw new Error(`Failed to find child at index ${index}`);
  }

  // TODO: get rid of renderAtIndex and characterWithStyle, replace with virtual dom element
  public render(
    start: number = 0,
    end: number = this.length,
    maxLineLength: number | null = null,
  ): CharacterWithStyle[][] {
    // TODO: handle line wrap
    const output: CharacterWithStyle[][] = [];
    let row: CharacterWithStyle[] = [];

    const offs = Math.max(0, start, Math.min(end, this.length));
    const len = Math.max(start, Math.min(end, this.length));

    for (let i = offs; i < len; i++) {
      const char = nullThrows(this.renderAtIndex(i));
      if (char.character === '\n') {
        output.push(...wrapText(row, maxLineLength));
        row = [];
        continue;
      }

      row.push(char);
    }

    output.push(...wrapText(row, maxLineLength));

    return output;
  }

  update(): void {
    this.rawText = this.children.map((child) => child.getRawText()).join('');
    this.parent?.update();
  }

  public lastIndexOf(searchString: string, position?: number): number {
    return this.getRawText().lastIndexOf(searchString, position);
  }
}

const NEW_ROW_PREFIX = [new CharacterWithStyle(' ', ''), new CharacterWithStyle(' ', '')];

function wrapText(text: CharacterWithStyle[], lineLength: number | null): CharacterWithStyle[][] {
  if (lineLength == null) {
    return [text];
  }
  const rows: CharacterWithStyle[][] = [];

  while (text.length > lineLength - 1) {
    // find the last space before the screen breaks
    const breakIndex = lastIndexOf(text, (elem) => elem.character === ' ', lineLength - 1);
    const newRow = (() => {
      if (breakIndex !== -1) {
        return text.slice(0, breakIndex);
      }

      // word was longer than the width of the screen, split it with a hyphen
      const row = text.slice(0, lineLength - NEW_ROW_PREFIX.length);
      text
        // TODO: find a better solution than arbitrarily taking the style of the character to the left
        .push(new CharacterWithStyle('-', row[row.length - 1].style));
      return row;
    })();

    rows.push(newRow);
    // indent wrapped rows
    text = NEW_ROW_PREFIX.concat(text.slice(newRow.length + 1));
  }

  // add the remainder
  rows.push(text);
  return rows;
}

function lastIndexOf<T>(
  arr: T[],
  matcher: (elem: T) => boolean,
  startIndex: number = arr.length - 1,
): number {
  for (let i = startIndex; i >= 0; i--) {
    if (matcher(arr[i])) {
      return i;
    }
  }
  // not found
  return -1;
}
