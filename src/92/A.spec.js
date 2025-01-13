const { getMaxRest } = require('./A');

describe('92A. Chips', () => {
  it.each`
    n    | num   | m      | result
    ${1} | ${4}  | ${11}  | ${0}
    ${2} | ${17} | ${107} | ${2}
    ${3} | ${3}  | ${8}   | ${1}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMaxRest(num, m)).toBe(result);
  });
});
