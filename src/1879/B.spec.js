const { getMinTotalCost } = require('./B');

describe('1879B. Chips on the Board', () => {
  it.each`
    n    | arr1               | arr2               | result
    ${1} | ${[1, 4, 1]}       | ${[3, 2, 2]}       | ${10}
    ${2} | ${[4]}             | ${[5]}             | ${9}
    ${3} | ${[4, 5]}          | ${[2, 3]}          | ${13}
    ${3} | ${[5, 2, 4, 5, 3]} | ${[3, 4, 2, 1, 5]} | ${24}
  `('Base test: $n', ({ arr1, arr2, result }) => {
    expect(getMinTotalCost(arr1, arr2)).toBe(result);
  });
});
