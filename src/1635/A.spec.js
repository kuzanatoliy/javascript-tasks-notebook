const { getMinPossibleSum } = require('./A');

describe('1635A. Min Or Sum', () => {
  it.each`
    n    | array               | result
    ${1} | ${[1, 3, 2]}        | ${3}
    ${2} | ${[1, 2, 4, 8, 16]} | ${31}
    ${3} | ${[6, 6]}           | ${6}
    ${4} | ${[3, 5, 6]}        | ${7}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinPossibleSum(array)).toBe(result);
  });
});
