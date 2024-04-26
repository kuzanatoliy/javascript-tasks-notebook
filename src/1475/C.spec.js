const { getNumbersOfWays } = require('./C');

describe('1475C. Ball in Berland', () => {
  it.each`
    n    | a    | b    | k    | arr1            | arr2            | result
    ${1} | ${3} | ${4} | ${4} | ${[1, 1, 2, 3]} | ${[2, 3, 3, 4]} | ${4}
    ${2} | ${1} | ${1} | ${1} | ${[1]}          | ${[1]}          | ${0}
    ${3} | ${2} | ${2} | ${4} | ${[1, 1, 2, 2]} | ${[1, 2, 1, 2]} | ${2}
  `('Base test: $n', ({ a, b, k, arr1, arr2, result }) => {
    expect(getNumbersOfWays(a, b, k, arr1, arr2)).toBe(result);
  });
});
