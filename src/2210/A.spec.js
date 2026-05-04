const { getPermutation } = require('./A');

describe('2210A. A Simple Sequence', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, 1]}
    ${2} | ${3} | ${[3, 2, 1]}
    ${3} | ${4} | ${[4, 3, 2, 1]}
    ${4} | ${5} | ${[5, 4, 3, 2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
