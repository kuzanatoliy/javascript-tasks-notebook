const { getPermutation } = require('./A');

describe('1391A. Suborrays', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${3} | ${[1, 2, 3]}
    ${3} | ${7} | ${[1, 2, 3, 4, 5, 6, 7]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
