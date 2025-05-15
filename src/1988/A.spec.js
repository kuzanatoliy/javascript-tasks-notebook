const { getCountOfOperations } = require('./A');

describe('1988A. Split the Multiset', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${1}  | ${5} | ${0}
    ${2} | ${5}  | ${2} | ${4}
    ${3} | ${6}  | ${3} | ${3}
    ${4} | ${16} | ${4} | ${5}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfOperations(num, k)).toBe(result);
  });
});
