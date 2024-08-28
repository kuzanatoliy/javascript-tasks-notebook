const { getCountOfCombinations } = require('./A');

describe('1743A. Password', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[0, 1, 2, 4, 5, 6, 8, 9]} | ${6}
    ${2} | ${[8]}                      | ${216}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfCombinations(array)).toBe(result);
  });
});
