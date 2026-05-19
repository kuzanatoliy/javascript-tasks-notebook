const { getAmount } = require('./A');

describe('1040A. Palindrome Dance', () => {
  it.each`
    n    | a      | b     | arr                | result
    ${1} | ${100} | ${1}  | ${[0, 1, 2, 1, 2]} | ${101}
    ${2} | ${10}  | ${12} | ${[1, 2, 0]}       | ${-1}
    ${3} | ${12}  | ${1}  | ${[0, 1, 0]}       | ${0}
  `('Base test: $n', ({ a, b, arr, result }) => {
    expect(getAmount(a, b, arr)).toBe(result);
  });
});
