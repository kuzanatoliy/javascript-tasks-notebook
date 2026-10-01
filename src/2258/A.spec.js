const { getGreatestGCD } = require('./A');

describe('2258A. Odd Eraser', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[2, 4, 6, 7, 8, 9, 10]}         | ${2}
    ${2} | ${[55, 55555]}                    | ${5}
    ${3} | ${[1000000, 1000, 1, 1000000000]} | ${1000000}
    ${4} | ${[23, 32, 23, 32, 23]}           | ${23}
  `('Base test: $n', ({ arr, result }) => {
    expect(getGreatestGCD(arr)).toBe(result);
  });
});
