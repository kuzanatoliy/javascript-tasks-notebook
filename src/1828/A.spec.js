const { getArray } = require('./A');

describe('1828A. Divisible Array', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[2]}
    ${2} | ${2} | ${[2, 4]}
    ${3} | ${3} | ${[2, 4, 6]}
    ${4} | ${4} | ${[2, 4, 6, 8]}
    ${5} | ${5} | ${[2, 4, 6, 8, 10]}
    ${6} | ${6} | ${[2, 4, 6, 8, 10, 12]}
    ${7} | ${7} | ${[2, 4, 6, 8, 10, 12, 14]}
  `('Base test: $n', ({ num, result }) => {
    expect(getArray(num)).toStrictEqual(result);
  });
});
