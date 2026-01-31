import { MutateElem } from './common';

export class CharacterWithStyle {
  public character: string;
  public style: string;
  public mutators: MutateElem[];

  constructor(character: string, style: string, mutators: MutateElem[]) {
    if (character.length != 1) {
      throw new Error(`character initialized with invalid count: ${character.length}`);
    }
    this.character = character;
    this.style = style;
    this.mutators = mutators;
  }
}
