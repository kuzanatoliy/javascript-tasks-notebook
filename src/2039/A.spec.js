const { getIntegers } = require('./A');

describe('2039A. Shohag Loves Mod', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[1, 3, 5]}
    ${2} | ${6} | ${[1, 3, 5, 7, 9, 11]}
  `('Base test: $n', ({ num, result }) => {
    expect(getIntegers(num)).toStrictEqual(result);
  });
});
