const { getPermutation } = require('./A');

describe('1638A. Reverse', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1]}             | ${[1]}
    ${2} | ${[2, 1, 3]}       | ${[1, 2, 3]}
    ${3} | ${[1, 4, 2, 3]}    | ${[1, 2, 4, 3]}
    ${4} | ${[1, 2, 3, 4, 5]} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPermutation(arr)).toStrictEqual(result);
  });
});
