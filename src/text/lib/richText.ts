import { RichTextSectionInstantiator, RichTextSection, IRichText } from './richTextCommon';
import { nullThrows, lastIndexOf, newElem } from '../../common/common';

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

  private redrawContainer: (() => void) | null = null;

  private hasChildren(): boolean {
    const hasChildren = this.children != null && this.children.length !== 0;
    return hasChildren;
  }

  public get length(): number {
    if (!this.hasChildren()) {
      return this.rawText.length;
    }
    return this.children.reduce((prev, child) => child.length + prev, 0);
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
      this.rawText = '';
      this.children = (content as RichTextInstantiator[]).map((instantiator) => instantiator(this));
      this.update();
    }
  }

  public redraw(): void {
    // TODO: diff results before requesting redraw
    this.parent?.redraw();
    this.redrawContainer?.();
  }

  public registerRedraw(callback: () => void): void {
    this.redrawContainer = callback;
  }

  public getRawText(): string {
    if (!this.hasChildren()) {
      return this.rawText;
    }
    return this.children.map((child) => child.getRawText()).join('');
  }

  // TODO: delete this, render should return a virtual dom tree
  // then the window can diff the virtual dom and make changes to the real dom
  private renderAtIndex(index: number): HTMLElement | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const styles = this.styles
      .map((section) => section.getStyles())
      .filter((e) => e != null)
      .join(' ');

    const classes = this.styles.flatMap((section) => section.getClasses()).filter((e) => e != null);

    if (!this.hasChildren()) {
      const elem = newElem(this.rawText.charAt(index), classes, styles);
      for (const style of this.styles) {
        style.registerEvents(elem);
      }

      return elem;
    }

    let offset = 0;
    for (const child of this.children) {
      if (index < offset + child.length) {
        const elem = nullThrows(
          child.renderAtIndex(index - offset),
          'rendering child within bounds',
        );

        if (styles !== '') {
          elem.style = styles + ' ' + elem.style.cssText;
        }

        for (const c of classes) {
          elem.classList.add(c);
        }

        for (const style of this.styles) {
          style.registerEvents(elem);
        }
        return elem;
      }
      offset += child.length;
    }

    // shouldn't be possible to get here, so make noise if we do
    throw new Error(`Failed to find child at index ${index}`);
  }

  // TODO: get rid of renderAtIndex and HTMLElement, replace with virtual dom
  public render(
    start: number = 0,
    end: number = this.length,
    maxLineLength: number | null = null,
  ): HTMLElement[][] {
    const output: HTMLElement[][] = [];
    let row: HTMLElement[] = [];

    const offs = Math.max(0, start, Math.min(start, this.length));
    const len = Math.max(start, Math.min(end, this.length));

    for (let i = offs; i < len; i++) {
      const char = nullThrows(this.renderAtIndex(i), 'rendering character within bounds');
      if (char.textContent === '\n') {
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

const INDENT_DEPTH = 2;

function prefixRow() {
  let output = Array(INDENT_DEPTH);
  for (let i = 0; i < INDENT_DEPTH; i++) {
    output[i] = newElem(' ');
  }

  return output;
}

function wrapText(text: HTMLElement[], lineLength: number | null): HTMLElement[][] {
  if (lineLength == null) {
    return [text];
  }

  const rows: HTMLElement[][] = [];

  let firstRow = true;

  while (text.length > lineLength) {
    // find the last space before the screen breaks
    const [newRow, remainder] = (() => {
      const breakIndex = lastIndexOf(text, (elem) => elem.textContent === ' ', lineLength);
      if (breakIndex !== -1) {
        // TODO: trim whitespace around line break
        return [text.slice(0, breakIndex), text.slice(breakIndex + 1)];
      }

      // word was longer than the width of the screen, split it with a hyphen
      const row = text.slice(0, lineLength - 1);
      // TODO: find a better solution than arbitrarily taking the style of the character to the left
      row.push(newElem('-', null, row[row.length - 1].style.cssText));
      return [row, text.slice(row.length - 1)];
    })();
    text = remainder;

    // indent wrapped rows after the first
    if (firstRow) {
      rows.push(newRow);
      lineLength -= 2;
      firstRow = false;
    } else {
      rows.push(prefixRow().concat(newRow));
    }
  }

  // add the remainder
  if (firstRow) {
    rows.push(text);
  } else {
    rows.push(prefixRow().concat(text));
  }
  return rows;
}
