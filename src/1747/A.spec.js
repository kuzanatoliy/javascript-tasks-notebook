const { getMaxValue } = require('./A');

describe('1747A. Two Groups', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[10, -10]}         | ${0}
    ${2} | ${[-2, -1, 11, 0]}   | ${8}
    ${3} | ${[2, 3, 2]}         | ${7}
    ${4} | ${[-9, 2, 0, 0, -4]} | ${11}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
