const { isItPossibleToChooseBalls } = require('./A');

describe('635A. Bear and Three Balls', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[18, 55, 16, 17]}               | ${'YES'}
    ${2} | ${[40, 41, 43, 44, 44, 44]}       | ${'NO'}
    ${3} | ${[5, 972, 3, 4, 1, 4, 970, 971]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToChooseBalls(arr)).toBe(result);
  });
});
