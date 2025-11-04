const { getMaxPossibleValue } = require('./C');

describe('1607B. Odd Grasshopper', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[10]}              | ${10}
    ${2} | ${[0, 0]}            | ${0}
    ${3} | ${[-1, 2, 0]}        | ${2}
    ${4} | ${[2, 10, 1, 7]}     | ${5}
    ${5} | ${[2, 3]}            | ${2}
    ${6} | ${[3, 2, -4, -2, 0]} | ${2}
    ${7} | ${[-1, 1]}           | ${2}
    ${8} | ${[-2]}              | ${-2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxPossibleValue(arr)).toBe(result);
  });
});
