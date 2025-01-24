const { getNumber } = require('./A');

describe('755A. New Year and Hurry', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${1}
    ${2} | ${4} | ${2}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumber(num)).toBe(result);
  });
});
