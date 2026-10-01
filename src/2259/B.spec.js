const { getMaxNumbersCount } = require('./B');

describe('2259B. Minus Two', () => {
  it.each`
    n    | arr                           | result
    ${1} | ${[1, 3]}                     | ${2}
    ${2} | ${[1, 1, 1, 2]}               | ${3}
    ${3} | ${[6, 7, 8]}                  | ${1}
    ${4} | ${[2, 2, 2, 2]}               | ${4}
    ${5} | ${[1, 10, 100, 1000, 100000]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxNumbersCount(arr)).toBe(result);
  });
});
