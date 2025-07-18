const { getPermutation } = require('./B');

describe('2117B. Shrink', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[1, 3, 2]}
    ${2} | ${6} | ${[1, 6, 5, 4, 3, 2]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
