const { isItPossibleToDefeatTheDragon } = require('./B');

describe('1337B. Kana and Dragon Quest game', () => {
  it.each`
    n    | array             | result
    ${1} | ${[100, 3, 4]}    | ${'YES'}
    ${2} | ${[189, 3, 4]}    | ${'NO'}
    ${3} | ${[64, 2, 3]}     | ${'NO'}
    ${4} | ${[63, 2, 3]}     | ${'YES'}
    ${5} | ${[30, 27, 7]}    | ${'YES'}
    ${6} | ${[10, 9, 1]}     | ${'YES'}
    ${7} | ${[69117, 21, 2]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToDefeatTheDragon(array)).toBe(result);
  });
});
