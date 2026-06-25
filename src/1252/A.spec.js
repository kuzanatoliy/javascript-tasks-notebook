const { transformPermutation } = require('./A');

describe('1252A. Copying Homework', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 3, 2, 4]} | ${[4, 2, 3, 1]}
    ${2} | ${[2, 1]}       | ${[1, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformPermutation(arr)).toStrictEqual(result);
  });
});
