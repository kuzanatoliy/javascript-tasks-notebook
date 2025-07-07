const { getPermutation } = require('./B');

describe('1818B. Indivisible', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[2, 1]}
    ${3} | ${3} | ${[-1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
