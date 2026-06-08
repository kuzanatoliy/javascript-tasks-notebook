const { getMinCost } = require('./A');

describe('2226A. Disturbing Distribution', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 1, 2, 3]} | ${7}
    ${2} | ${[3, 2, 1]}       | ${6}
    ${3} | ${[1, 1, 1, 1]}    | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCost(arr)).toBe(result);
  });
});
