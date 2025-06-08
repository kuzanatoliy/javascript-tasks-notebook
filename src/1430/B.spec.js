const { getMaxDifference } = require('./B');

describe('1430B. Barrels', () => {
  it.each`
    n    | array           | k    | result
    ${1} | ${[5, 5, 5, 5]} | ${1} | ${10}
    ${2} | ${[0, 0, 0]}    | ${2} | ${0}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getMaxDifference(array, k)).toBe(result);
  });
});
