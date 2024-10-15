const { getPoints } = require('./B');

describe('1108B. Divisors of Two Integers', () => {
  it.each`
    n    | arr                                 | result
    ${1} | ${[10, 2, 8, 1, 2, 4, 1, 20, 4, 5]} | ${[20, 8]}
    ${2} | ${[9973, 9973, 1, 1]}               | ${[9973, 9973]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPoints(arr)).toStrictEqual(result);
  });
});
