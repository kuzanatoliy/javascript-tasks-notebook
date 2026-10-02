const { getMaxAmount } = require('./A');

describe('2269A. SauSaGe Bank', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${1}  | ${1} | ${2}
    ${2} | ${2}  | ${1} | ${4}
    ${3} | ${4}  | ${3} | ${8}
    ${4} | ${5}  | ${5} | ${10}
    ${5} | ${10} | ${2} | ${514}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMaxAmount(num, k)).toBe(result);
  });
});
