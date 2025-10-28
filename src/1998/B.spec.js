const { getPermutation } = require('./B');

describe('1998B. Minimize Equal Sum Subarrays', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 2]}                | ${[2, 1]}
    ${2} | ${[1, 2, 3, 4, 5]}       | ${[2, 3, 4, 5, 1]}
    ${3} | ${[4, 7, 5, 1, 2, 6, 3]} | ${[7, 5, 1, 2, 6, 3, 4]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPermutation(arr)).toStrictEqual(result);
  });
});
