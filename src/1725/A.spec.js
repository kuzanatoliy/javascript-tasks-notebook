const { getCountOfDominoes } = require('./A');

describe('1725A. Accumulation of Dominoes', () => {
  it.each`
    n    | num  | m    | result
    ${1} | ${3} | ${4} | ${9}
    ${2} | ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getCountOfDominoes(num, m)).toBe(result);
  });
});
