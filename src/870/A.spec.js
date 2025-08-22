const { getPrettyInt } = require('./A');

describe('870A. Search for Pretty Integers', () => {
  it.each`
    n    | arrA                           | arrB                        | result
    ${1} | ${[4, 2]}                      | ${[5, 7, 6]}                | ${'25'}
    ${2} | ${[1, 2, 3, 4, 5, 6, 7, 8]}    | ${[8, 7, 6, 5, 4, 3, 2, 1]} | ${'1'}
    ${3} | ${[5, 4, 2, 3, 6, 1, 7, 9, 8]} | ${[9]}                      | ${'9'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getPrettyInt(arrA, arrB)).toBe(result);
  });
});
