const { getPermutation } = require('./B');

describe('1612A. Distance', () => {
  it.each`
    n    | num   | a    | b    | result
    ${1} | ${6}  | ${2} | ${5} | ${[4, 2, 6, 5, 3, 1]}
    ${2} | ${6}  | ${1} | ${3} | ${[-1]}
    ${3} | ${6}  | ${4} | ${3} | ${[6, 4, 5, 1, 3, 2]}
    ${4} | ${4}  | ${2} | ${4} | ${[3, 2, 4, 1]}
    ${5} | ${10} | ${5} | ${3} | ${[-1]}
    ${6} | ${2}  | ${1} | ${2} | ${[1, 2]}
    ${7} | ${2}  | ${2} | ${1} | ${[2, 1]}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getPermutation(num, a, b)).toStrictEqual(result);
  });
});
