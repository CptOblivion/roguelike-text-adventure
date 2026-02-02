import { richText, richTextBold, RichTextColor, richTextColor } from '../richText';

describe('building richtext strings', () => {
  const firstSection = 'first section, ';
  const secondSection = 'second section,';
  const thirdSection = ' third section';

  const styleBold = 'font-weight: bold;';
  const styleRed = `color: ${RichTextColor.RED};`;

  const richTextLinear = richText([
    richText(firstSection),
    richText(secondSection, [richTextBold()]),
    richText(thirdSection, [richTextColor(RichTextColor.RED)]),
  ]);

  const richTextNested = richText([
    richText([richText(firstSection), richText(secondSection, [richTextBold()])]),
    richText(thirdSection, [richTextColor(RichTextColor.RED)]),
  ]);

  describe.each([
    ['linear', richTextLinear],
    ['nested', richTextNested],
  ])('$case', (_case, composedText) => {
    test('Builds a string from sections', () => {
      expect(composedText(null).getRawText()).toBe(
        `${firstSection}${secondSection}${thirdSection}`,
      );
    });

    test('Renders characters matching the input sections', () => {
      const result = composedText(null).render();

      expect(result).toHaveLength(1);

      const row = result[0];

      let i = 0;
      for (const expectChar of firstSection) {
        const char = row[i];
        expect(char.character).toBe(expectChar);
        expect(char.style).toBe('');
        i++;
      }

      for (const expectChar of secondSection) {
        const char = row[i];
        expect(char.character).toBe(expectChar);
        expect(char.style).toBe(styleBold);
        i++;
      }

      for (const expectChar of thirdSection) {
        const char = row[i];
        expect(char.character).toBe(expectChar);
        expect(char.style).toBe(styleRed);
        i++;
      }
    });

    test('Handles newlines properly', () => {
      const result = richText([
        richText(firstSection + '\n'),
        richText(secondSection, [richTextBold()]),
      ])(null);

      expect(result.getRawText()).toBe(`${firstSection}\n${secondSection}`);

      const rendered = result.render();

      expect(rendered).toHaveLength(2);

      expect(rendered[0][0].style).toBe('');
      expect(rendered[1][0].style).toBe(styleBold);
    });
  });

  describe('wraps lines given a max line length', () => {
    test('Breaks line at last possible whitespace, if it can', () => {
      const lineLength = 8;
      const result = richText([richText('12345' + '\n'), richText('6789abcd efghij')])(null);

      // raw text should *not* be affected by line wrap
      expect(result.getRawText()).toBe('12345\n6789abcd efghij');

      const rendered = result.render(undefined, undefined, lineLength);

      expect(rendered).toHaveLength(3);

      // >12345
      expect(rendered[0]).toHaveLength(5);
      // >n6789abcd
      expect(rendered[1]).toHaveLength(8);
      // >  efghij
      expect(rendered[2]).toHaveLength(8);
    });

    test('If the text is too long to fit on a line, it breaks mid-word', () => {
      const lineLength = 8;

      const result = richText('123456789abcdefgh')(null).render(undefined, undefined, lineLength);

      expect(result).toHaveLength(3);

      // >1234567-
      // >  89abc-
      // >  defgh
      expect(result[0]).toHaveLength(8);
      expect(result[1]).toHaveLength(8);
      expect(result[2]).toHaveLength(7);
    });
  });

  test('Nested sections inherit CSS from parents', () => {
    const result = richText([
      richText(
        [richText('A'), richText('B', [richTextBold()])],
        [richTextColor(RichTextColor.RED)],
      ),
    ])(null).render();

    expect(result[0][0].style).toBe(styleRed);
    expect(result[0][1].style).toBe(`${styleRed}${styleBold}`);
  });
});
