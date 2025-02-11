const { getMaxEqualPrice } = require('./B');

describe('1183B. Equalize Prices', () => {
  it.each`
    n    | arr                | k    | result
    ${1} | ${[1, 1, 2, 3, 1]} | ${1} | ${2}
    ${2} | ${[6, 4, 8, 5]}    | ${2} | ${6}
    ${3} | ${[1, 6]}          | ${2} | ${-1}
    ${4} | ${[5, 2, 5]}       | ${5} | ${7}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxEqualPrice(arr, k)).toBe(result);
  });
});
