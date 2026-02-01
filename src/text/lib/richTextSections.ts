import { Box, EventManager, EventType } from '../../events/events';
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

  constructor(args: RichTextSectionInstantiatorArgs) {
    super(args);
    EventManager.addListener(
      EventType.MouseEnter,
      () => {
        this.hovered = true;
        console.log(this.parent);
        this.parent.redraw();
      },
      new Box(1, 1, 10, 10),
    );
    EventManager.addListener(
      EventType.MouseLeave,
      () => {
        this.hovered = false;
      },
      new Box(1, 1, 10, 10),
    );
  }

  public getStyles(): string {
    console.log('style', this);
    return this.hovered ? `color: ${RichTextColor.GREEN}; cursor: pointer;` : '';
  }
}

export function richTextHover(): RichTextSectionInstantiator {
  return (args: RichTextSectionInstantiatorArgs) => new RichTextSectionHover(args);
}
