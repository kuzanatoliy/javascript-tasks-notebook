﻿const { getTramLines } = require('./A');

describe('1056A. Determine Line', () => {
  it.each`
    n    | steps                                                                                                         | result
    ${1} | ${[[3, 1, 4, 6], [2, 1, 4], [5, 10, 5, 6, 4, 1]]}                                                             | ${[1, 4]}
    ${2} | ${[[1, 1], [10, 10, 9, 8, 7, 100, 5, 4, 3, 99, 1], [5, 1, 2, 3, 4, 5], [5, 4, 1, 3, 2, 5], [4, 10, 1, 5, 3]]} | ${[1]}
  `('Base test: $n', ({ steps, result }) => {
    expect(getTramLines(steps)).toStrictEqual(result);
  });
});
