﻿const { isItPossibleToWalkTwice } = require('./A');

describe('1776A. Walking Boy', () => {
  it.each`
    n    | arr                                                                            | result
    ${1} | ${[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400]} | ${'NO'}
    ${2} | ${[100, 200, 300, 400, 600, 700, 800, 900, 1100, 1200, 1300, 1400]}            | ${'YES'}
    ${3} | ${[100, 200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200, 1300, 1400]}       | ${'NO'}
    ${4} | ${[101, 189, 272, 356, 463, 563, 659, 739, 979, 1071, 1170, 1274, 1358]}       | ${'YES'}
    ${5} | ${[42]}                                                                        | ${'YES'}
    ${6} | ${[0, 1, 2, 3, 4]}                                                             | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToWalkTwice(arr)).toBe(result);
  });
});
