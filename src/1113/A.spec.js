const { getMinAmount } = require('./A');

describe('1113A. Sasha and His Trip', () => {
  it.each`
    n    | num   | v     | result
    ${1} | ${4}  | ${2}  | ${4}
    ${2} | ${7}  | ${6}  | ${6}
    ${3} | ${12} | ${89} | ${11}
  `('Base test: $n', ({ num, v, result }) => {
    expect(getMinAmount(num, v)).toBe(result);
  });
});
