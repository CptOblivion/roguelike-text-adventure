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

  protected registerHoverEvents(elem: HTMLElement): void {
    elem.addEventListener(EventType.MouseEnter, () => this.onMouseEnter());
    elem.addEventListener(EventType.MouseLeave, () => this.onMouseExit());
  }

  public registerEvents(elem: HTMLElement): void {
    this.registerHoverEvents(elem);
  }

  protected getHoverClasses(): string[] {
    if (!this.hovered) return [];
    return ['hovered'];
  }

  public getClasses(): string[] {
    return this.getHoverClasses();
  }
}

export function richTextHover(): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionHover(args);
}

class RichTextSectionLink extends RichTextSectionHover {
  private onClick(): void {
    console.log('clicked!');
  }

  protected registerClickEvents(elem: HTMLElement): void {
    elem.addEventListener(EventType.Click, () => this.onClick());
  }

  public registerEvents(elem: HTMLElement): void {
    this.registerHoverEvents(elem);
    this.registerClickEvents(elem);
  }

  protected getClickClasses(): string[] {
    return ['clickable'];
  }

  public getClasses(): string[] {
    return [...this.getClickClasses(), ...this.getHoverClasses()];
  }
}

export function richTextLink(): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionLink(args);
}
