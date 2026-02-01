export class CharacterWithStyle {
  public character: string;
  public style: string;

  constructor(character: string, style: string) {
    if (character.length != 1) {
      throw new Error(`character initialized with invalid count: ${character.length}`);
    }
    this.character = character;
    this.style = style;
  }
}
