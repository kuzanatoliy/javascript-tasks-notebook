const { getPermutation } = require('./A');

describe('2084A. Max and Mod', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[-1]}
    ${2} | ${3} | ${[3, 1, 2]}
    ${3} | ${4} | ${[-1]}
    ${4} | ${5} | ${[5, 1, 2, 3, 4]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
