const { getMaxCost } = require('./A');

describe('369A. Sereja and Coat Rack', () => {
  it.each`
    n    | d    | arr       | m     | result
    ${1} | ${1} | ${[1, 2]} | ${2}  | ${3}
    ${2} | ${1} | ${[1, 2]} | ${10} | ${-5}
  `('Base test: $n', ({ d, arr, m, result }) => {
    expect(getMaxCost(d, arr, m)).toBe(result);
  });
});
