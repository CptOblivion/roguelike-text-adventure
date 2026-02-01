import { Box, EventManager, EventType } from '../../events/events';
import {
  RichTextInstantiatorArgs,
  IRichText,
  RichTextInstantiator,
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

export function richTextBold(): RichTextInstantiator {
  return (args: RichTextInstantiatorArgs) => new RichTextSectionBold(args);
}

class RichTextSectionColor extends RichTextSection {
  public color: RichTextColor;
  constructor(args: RichTextInstantiatorArgs, color: RichTextColor) {
    super(args);
    this.color = color;
  }

  public getStyles(): string {
    return `color: ${this.color};`;
  }
}

export function richTextColor(color: RichTextColor): RichTextInstantiator {
  return (args: RichTextInstantiatorArgs) => new RichTextSectionColor(args, color);
}

class RichTextSectionHover extends RichTextSection {
  private hovered: boolean = false;

  constructor(args: RichTextInstantiatorArgs) {
    super(args);
    EventManager.addListener(
      EventType.MouseEnter,
      () => {
        this.hovered = true;
        console.log(this.parent);
        this.parent.redraw();
      },
      new Box(1, 1, 2, 2),
    );
    EventManager.addListener(
      EventType.MouseLeave,
      () => {
        this.hovered = false;
      },
      new Box(1, 1, 2, 2),
    );
  }

  public getStyles(): string {
    console.log('style', this);
    return this.hovered ? `color: ${RichTextColor.GREEN}; cursor: pointer;` : '';
  }
}

export function richTextHover(): RichTextInstantiator {
  return (args: RichTextInstantiatorArgs) => new RichTextSectionHover(args);
}
