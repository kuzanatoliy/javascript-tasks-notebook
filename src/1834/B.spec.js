﻿const { getIndexes } = require('./B');

describe('1834B. Maximum Strength', () => {
  it.each`
    n    | array                              | result
    ${1} | ${[1, 2, 3]}                       | ${[3, 2]}
    ${2} | ${[1, 3, 2]}                       | ${[1, 3]}
    ${3} | ${[1, 3, 2, 5, 4]}                 | ${[4, 3]}
    ${4} | ${[4, 5, 6, 1, 2, 3]}              | ${[3, 4]}
    ${5} | ${[8, 7, 6, 3, 2, 1, 4, 5, 9]}     | ${[9, 6]}
    ${6} | ${[7, 10, 5, 1, 9, 8, 3, 2, 6, 4]} | ${[2, 4]}
    ${7} | ${[8, 5, 10, 9, 2, 1, 3, 4, 6, 7]} | ${[3, 5]}
    ${8} | ${[2, 3, 5, 7, 10, 1, 8, 6, 4, 9]} | ${[6, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getIndexes(array)).toStrictEqual(result);
  });
});
