﻿const { getCountOfDivisiblePairs } = require('./D');

describe('1931D. Divisible Pairs', () => {
  it.each`
    n    | array                                  | x    | y     | result
    ${1} | ${[1, 2, 7, 4, 9, 6]}                  | ${5} | ${2}  | ${2}
    ${2} | ${[1, 10, 15, 3, 8, 12, 15]}           | ${9} | ${5}  | ${0}
    ${3} | ${[14, 10, 2, 2, 11, 11, 13, 5, 6]}    | ${4} | ${10} | ${1}
    ${4} | ${[10, 7, 6, 7, 9, 7, 7, 10, 10]}      | ${5} | ${6}  | ${3}
    ${5} | ${[4, 9, 7, 1, 2, 2, 13, 3, 15]}       | ${6} | ${2}  | ${5}
    ${6} | ${[14, 6, 1, 15, 12, 15, 8, 2, 15]}    | ${2} | ${3}  | ${7}
    ${7} | ${[13, 3, 3, 2, 12, 11, 3, 7, 13, 14]} | ${5} | ${7}  | ${0}
  `('Base test: $n', ({ array, x, y, result }) => {
    expect(getCountOfDivisiblePairs(array, x, y)).toBe(result);
  });
});