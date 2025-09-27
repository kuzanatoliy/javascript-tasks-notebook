const { getNumbersSum } = require('./A');

describe('2148A. Sublime Sequence', () => {
  it.each`
    n    | x    | num  | result
    ${1} | ${1} | ${4} | ${0}
    ${2} | ${2} | ${5} | ${2}
    ${3} | ${3} | ${6} | ${0}
    ${4} | ${4} | ${7} | ${4}
  `('Base test: $n', ({ x, num, result }) => {
    expect(getNumbersSum(x, num)).toBe(result);
  });
});
