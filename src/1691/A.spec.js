const { getMinCountOfRemovedNumbers } = require('./A');

describe('1675A. Beat The Odds', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 4, 3, 6, 8]}    | ${1}
    ${2} | ${[3, 5, 9, 7, 1, 3]} | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfRemovedNumbers(array)).toBe(result);
  });
});
