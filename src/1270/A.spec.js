const { couldFirstPlayerWin } = require('./A');

describe('1270A. Card Game', () => {
  it.each`
    n    | arr1      | arr2         | result
    ${1} | ${[2]}    | ${[1]}       | ${'YES'}
    ${2} | ${[2, 3]} | ${[1, 4, 5]} | ${'NO'}
  `('Base test: $n', ({ arr1, arr2, result }) => {
    expect(couldFirstPlayerWin(arr1, arr2)).toBe(result);
  });
});
