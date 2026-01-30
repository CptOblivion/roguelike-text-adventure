import { RichText, richTextBold, RichTextColor, richTextColor } from '../richtext';

describe('building richtext strings', () => {
  test('builds a string from sections', () => {
    const firstSection = 'first section, ';
    const secondSection = 'second section,';
    const thirdSection = ' third section';

    const result = RichText.build(
      RichText.new(firstSection),
      RichText.new(secondSection, richTextBold()),
      RichText.new(thirdSection, richTextColor(RichTextColor.RED)),
    );

    expect(result.getRawText()).toBe('first section, second section, third section');

    let i = 0;
    for (const expectChar of firstSection) {
      const char = result.getCharacterAt(i);
      expect(char.character).toBe(expectChar);
      expect(char.style).toBe('');
      i++;
    }

    for (const expectChar of secondSection) {
      const char = result.getCharacterAt(i);
      expect(char.character).toBe(expectChar);
      expect(char.style).toBe('font-weight: bold;');
      i++;
    }

    for (const expectChar of thirdSection) {
      const char = result.getCharacterAt(i);
      expect(char.character).toBe(expectChar);
      expect(char.style).toBe(`color: ${RichTextColor.RED};`);
      i++;
    }
  });
});
