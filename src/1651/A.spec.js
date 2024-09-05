const { getWinner } = require('./A');

describe('1651A. Playoff', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${7}
    ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getWinner(num)).toBe(result);
  });
});
