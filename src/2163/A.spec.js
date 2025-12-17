const { isItPossibleToWin } = require('./A');

describe('2163A. Souvlaki VS. Kalamaki', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[4, 2, 2, 1]}    | ${'YES'}
    ${2} | ${[1, 1, 1, 1]}    | ${'YES'}
    ${3} | ${[1, 5, 1, 5, 1]} | ${'YES'}
    ${4} | ${[1, 2, 3]}       | ${'NO'}
    ${5} | ${[1, 3, 2, 3, 5]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToWin(arr)).toBe(result);
  });
});
