import { lastIndexOf } from '../common';
describe('lastIndexOf', () => {
  const arr = [0, 1, 0, 1, 0, 2, 3];
  const matcher = (e: number) => e === 0;
  test('returns the index of the last entry of an item in an array', () => {
    expect(lastIndexOf(arr, matcher)).toBe(4);
  });

  test('returns -1 if the item is not present in the array', () => {
    expect(lastIndexOf(arr, (e) => e === 4)).toBe(-1);
  });

  test('returns the last index of an item given a startIndex', () => {
    expect(lastIndexOf(arr, matcher, 3)).toBe(2);
  });

  test('clips startIndex at 0 if it is negative', () => {
    expect(lastIndexOf(arr, matcher, -1)).toBe(0);
  });

  test('clips startIndex if it is higher than the length of the input array', () => {
    expect(lastIndexOf(arr, matcher, 100)).toBe(4);
  });
});
