const { getPermutation } = require('./A');

describe('2246A. farmpiggie and Subset Sum', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, 1]}
    ${2} | ${4} | ${[4, 3, 2, 1]}
    ${3} | ${6} | ${[6, 5, 4, 3, 2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
