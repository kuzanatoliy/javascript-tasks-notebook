﻿const { isLoveTriangle } = require('./A');

describe('939A. Love Triangle', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 4, 5, 1, 3]} | ${'YES'}
    ${2} | ${[5, 5, 5, 5, 1]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isLoveTriangle(arr)).toBe(result);
  });
});
