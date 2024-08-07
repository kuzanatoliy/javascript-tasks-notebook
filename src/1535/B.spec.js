const { getCountOfPairs } = require('./B');

describe('1535A. Fair Playoff', () => {
  it.each`
    n    | array              | result
    ${1} | ${[3, 6, 5, 3]}    | ${4}
    ${2} | ${[1, 7]}          | ${0}
    ${3} | ${[1, 4, 2, 4, 1]} | ${9}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfPairs(array)).toBe(result);
  });
});
