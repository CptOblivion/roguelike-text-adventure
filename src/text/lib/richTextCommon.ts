export interface IRichText {
  redraw(): void;
  update(): void;
}

// bundled into an array so subclasses can use construction args without having to be aware of common args
export type RichTextSectionInstantiatorArgs = [parent: IRichText];

export type RichTextSectionInstantiator = (
  args: RichTextSectionInstantiatorArgs,
) => RichTextSection;

export abstract class RichTextSection {
  public parent: IRichText;

  constructor([parent]: [IRichText]) {
    this.parent = parent;
  }

  public abstract getStyles(): string;

  public shifted(offset: number): RichTextSection {
    const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    copy.start += offset;
    copy.end += offset;
    return copy;
  }
}
