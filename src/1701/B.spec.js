const { getPermutation } = require('./B');

describe('1701B. Permutation', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${[2, [1, 2]]}
    ${2} | ${3}   | ${[2, [1, 2, 3]]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPermutation(number)).toStrictEqual(result);
  });
});
