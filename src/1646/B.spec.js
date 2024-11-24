const { isItPossibleToPaint } = require('./B');

describe('1646B. Anti-Fibonacci Permutation', () => {
  it.each`
    n    | arr                                                             | result
    ${1} | ${[1, 2, 3]}                                                    | ${'NO'}
    ${2} | ${[2, 8, 6, 3, 1]}                                              | ${'YES'}
    ${3} | ${[3, 5, 4, 2]}                                                 | ${'NO'}
    ${4} | ${[1000000000, 1000000000, 1000000000, 1000000000, 1000000000]} | ${'NO'}
    ${5} | ${[14, 15, 15, 15, 19, 16, 14, 18, 16, 10]}                     | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToPaint(arr)).toBe(result);
  });
});
