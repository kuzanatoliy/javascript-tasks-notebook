const { getNewPrice } = require('./A');

describe('1234A. Equalize Prices Again', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${3}
    ${2} | ${[1, 2, 2]}       | ${2}
    ${3} | ${[1, 1, 1, 1]}    | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getNewPrice(array)).toBe(result);
  });
});
