import { EventType } from '../../common/common';
import {
  RichTextSectionInstantiatorArgs,
  RichTextSectionInstantiator,
  RichTextSection,
} from './richTextCommon';

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

export function richTextBold(): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionBold(args);
}

class RichTextSectionColor extends RichTextSection {
  public color: RichTextColor;
  constructor(args: RichTextSectionInstantiatorArgs, color: RichTextColor) {
    super(args);
    this.color = color;
  }

  public getStyles(): string {
    return `color: ${this.color};`;
  }
}

export function richTextColor(color: RichTextColor): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionColor(args, color);
}

class RichTextSectionHover extends RichTextSection {
  private hovered: boolean = false;

  private onMouseEnter(): void {
    this.hovered = true;
    this.parent.redraw();
  }

  private onMouseExit(): void {
    this.hovered = false;
    this.parent.redraw();
  }

  public registerEvents(elem: HTMLElement): void {
    elem.addEventListener(EventType.MouseEnter, () => this.onMouseEnter());
    elem.addEventListener(EventType.MouseLeave, () => this.onMouseExit());
  }

  public getStyles(): string {
    return this.hovered ? `color: ${RichTextColor.GREEN}; cursor: pointer;` : '';
  }
}

export function richTextHover(): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionHover(args);
}
