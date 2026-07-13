const { getMaxSum } = require('./D');

describe('1742D. Coprime', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[3, 2, 1]}             | ${6}
    ${2} | ${[1, 3, 5, 2, 4, 7, 7]} | ${12}
    ${3} | ${[1, 2, 3, 4, 5]}       | ${9}
    ${4} | ${[2, 2, 4]}             | ${-1}
    ${5} | ${[5, 4, 3, 15, 12, 16]} | ${10}
    ${6} | ${[1, 2, 2, 3, 6]}       | ${7}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSum(arr)).toBe(result);
  });
});
