import { RichTextSectionInstantiator, RichTextSection, IRichText } from './richTextCommon';
import { CharacterWithStyle } from './characterWithStyle';
import { nullThrows, lastIndexOf } from '../../common/common';

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
      if (index < offset + child.length) {
        const out = nullThrows(child.renderAtIndex(index - offset));
        out.style = styles + out.style;
        return out;
      }
      offset += child.length;
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

    const offs = Math.max(0, start, Math.min(start, this.length));
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

  let firstRow = true;

  while (text.length > lineLength) {
    // find the last space before the screen breaks
    const newRow = (() => {
      const breakIndex = lastIndexOf(text, (elem) => elem.character === ' ', lineLength);
      if (breakIndex !== -1) {
        // TODO: trim whitespace around line break
        return text.slice(0, breakIndex);
      }

      // word was longer than the width of the screen, split it with a hyphen
      const row = text.slice(0, lineLength - 1);
      // TODO: find a better solution than arbitrarily taking the style of the character to the left
      row.push(new CharacterWithStyle('-', row[row.length - 1].style));
      return row;
    })();

    // account for indented spaces after the first row
    if (firstRow) {
      rows.push(newRow);
      lineLength -= 2;
      firstRow = false;
    } else {
      rows.push(NEW_ROW_PREFIX.concat(newRow));
    }

    // indent wrapped rows
    text = text.slice(newRow.length - 1);
  }

  // add the remainder
  rows.push(NEW_ROW_PREFIX.concat(text));
  return rows;
}
