const { getDigits } = require('./B');

describe('2043B. Digits', () => {
  it.each`
    n    | num  | d    | result
    ${1} | ${2} | ${6} | ${[1, 3]}
    ${2} | ${7} | ${1} | ${[1, 3, 7, 9]}
    ${3} | ${8} | ${5} | ${[1, 3, 5, 7, 9]}
  `('Base test: $n', ({ num, d, result }) => {
    expect(getDigits(num, d)).toStrictEqual(result);
  });
});
