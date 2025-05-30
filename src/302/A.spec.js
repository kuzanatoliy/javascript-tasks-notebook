﻿const { getResults } = require('./A');

describe('302A. Eugeny and Array', () => {
  it.each`
    n    | array                | queries                                     | result
    ${1} | ${[1, -1]}           | ${[[1, 1], [1, 2], [2, 2]]}                 | ${[0, 1, 0]}
    ${2} | ${[-1, 1, 1, 1 - 1]} | ${[[1, 1], [2, 3], [3, 5], [2, 5], [1, 5]]} | ${[0, 1, 0, 1, 0]}
  `('Base test: $n', ({ array, queries, result }) => {
    expect(getResults(array, queries)).toStrictEqual(result);
  });
});
