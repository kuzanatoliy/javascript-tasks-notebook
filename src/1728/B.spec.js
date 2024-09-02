const { getPermutation } = require('./B');

describe('1728B. Best Permutation', () => {
  it.each`
    n    | number | result
    ${1} | ${4}   | ${[2, 1, 3, 4]}
    ${2} | ${5}   | ${[1, 3, 2, 4, 5]}
    ${3} | ${6}   | ${[2, 1, 4, 3, 5, 6]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPermutation(number)).toStrictEqual(result);
  });
});
