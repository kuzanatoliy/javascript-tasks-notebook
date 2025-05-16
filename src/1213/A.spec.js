const { getCost } = require('./A');

describe('1213A. Chips Moving', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 3]}       | ${1}
    ${2} | ${[2, 2, 2, 3, 3]} | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCost(array)).toBe(result);
  });
});
