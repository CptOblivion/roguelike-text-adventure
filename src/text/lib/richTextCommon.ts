export interface IRichText {}

// bundled into an array so subclasses can use construction args without having to be aware of common args
export type RichTextInstantiatorArgs = [x: number, y: number, parent: IRichText];

export type RichTextInstantiator = (args: RichTextInstantiatorArgs) => RichTextSection;

export abstract class RichTextSection {
  public start: number;
  public end: number;
  public parent: IRichText;

  constructor([start, end, parent]: [number, number, IRichText]) {
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
}
