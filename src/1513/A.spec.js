const { getPermutation } = require('./A');

describe('1513A. Array and Peaks', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${1} | ${0} | ${[1]}
    ${2} | ${5} | ${2} | ${[1, 5, 2, 4, 3]}
    ${3} | ${6} | ${6} | ${[-1]}
    ${4} | ${2} | ${1} | ${[-1]}
    ${5} | ${6} | ${1} | ${[1, 6, 5, 4, 3, 2]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPermutation(num, k)).toStrictEqual(result);
  });
});
