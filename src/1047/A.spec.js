const { getNumbers } = require('./A');

describe('1047A. Little C Loves 3 I', () => {
  it.each`
    n    | num    | result
    ${1} | ${3}   | ${[1, 1, 1]}
    ${2} | ${233} | ${[1, 2, 230]}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumbers(num)).toStrictEqual(result);
  });
});
