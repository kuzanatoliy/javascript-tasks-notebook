const { transformPermutation } = require('./E1');

describe('1579E1. Permutation Minimization by Deque', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[3, 1, 2, 4]} | ${[1, 3, 2, 4]}
    ${2} | ${[3, 2, 1]}    | ${[1, 2, 3]}
    ${3} | ${[3, 1, 2]}    | ${[1, 3, 2]}
    ${4} | ${[1, 2]}       | ${[1, 2]}
    ${5} | ${[2, 1]}       | ${[1, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformPermutation(arr)).toStrictEqual(result);
  });
});
