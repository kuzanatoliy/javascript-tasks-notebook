const { getCost } = require('./B');

describe('463B. Caisa and Pylons', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 4, 3, 2, 4]} | ${4}
    ${2} | ${[4, 4, 4]}       | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCost(arr)).toBe(result);
  });
});
