const { getSequence } = require('./A');

describe('1557A. Ezzat and Two Subsequences', () => {
  it.each`
    n    | array             | result
    ${1} | ${[3, 1, 2]}      | ${4.5}
    ${2} | ${[-7, -6, -6]}   | ${-12.5}
    ${3} | ${[2, 2, 2]}      | ${4}
    ${4} | ${[17, 3, 5, -3]} | ${18.666666666666668}
  `('Base test: $n', ({ array, result }) => {
    expect(getSequence(array)).toBe(result);
  });
});
