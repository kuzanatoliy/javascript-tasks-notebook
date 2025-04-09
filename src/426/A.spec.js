const { isItPossibleToPlay } = require('./A');

describe('426A. Sereja and Mugs', () => {
  it.each`
    n    | array        | s    | result
    ${1} | ${[1, 1, 1]} | ${4} | ${'YES'}
    ${2} | ${[3, 1, 3]} | ${4} | ${'YES'}
    ${3} | ${[4, 4, 4]} | ${4} | ${'NO'}
  `('Base test: $n', ({ array, s, result }) => {
    expect(isItPossibleToPlay(array, s)).toBe(result);
  });
});
