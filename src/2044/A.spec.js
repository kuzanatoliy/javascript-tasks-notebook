const { getCountOfPairs } = require('./A');

describe('2044A. Easy Problem', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${1}
    ${2} | ${4} | ${3}
    ${3} | ${6} | ${5}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfPairs(num)).toBe(result);
  });
});
