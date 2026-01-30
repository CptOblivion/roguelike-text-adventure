import { RichText, richTextBold, RichTextColor, richTextColor } from '../richtext';

describe('building richtext strings', () => {
  const firstSection = 'first section, ';
  const secondSection = 'second section,';
  const thirdSection = ' third section';

  const getSections = () =>
    RichText.build(
      RichText.new(firstSection),
      RichText.new(secondSection, richTextBold()),
      RichText.new(thirdSection, richTextColor(RichTextColor.RED)),
    );
  test('builds a string from sections', () => {
    const result = getSections();

    expect(result.getRawText()).toBe('first section, second section, third section');
  });

  test('returns css matching the input sections', () => {
    const result = getSections();

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

  test('divides substrings correctly', () => {
    const startingText = getSections();

    const start = 5;
    const end = 30;
    const expectString = (firstSection + secondSection).substring(start, end);

    const substring1 = startingText.substring(start, end);

    expect(substring1.getRawText()).toBe(expectString);

    let i = 0;
    for (const expectChar of firstSection.substring(start)) {
      const char = substring1.getCharacterAt(i);
      expect(char.character).toBe(expectChar);
      expect(char.style).toBe('');
      i++;
    }

    for (const expectChar of secondSection.substring(0, end - firstSection.length)) {
      const char = substring1.getCharacterAt(i);
      expect(char.character).toBe(expectChar);
      expect(char.style).toBe('font-weight: bold;');
      i++;
    }

    // verify styles got clipped so they don't bleed over into newly added sections
    const sandwichedText = RichText.build(
      RichText.new('_'),
      substring1,
      RichText.new('_', richTextColor(RichTextColor.RED)),
    );

    const prefix = sandwichedText.getCharacterAt(0);
    const suffix = sandwichedText.getCharacterAt(sandwichedText.getLength() - 1);

    expect(prefix.character).toBe('_');
    expect(prefix.style).toBe('');
    expect(suffix.character).toBe('_');
    expect(suffix.style).toBe(`color: ${RichTextColor.RED};`);
  });
});
