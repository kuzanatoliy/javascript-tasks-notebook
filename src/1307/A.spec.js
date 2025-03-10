const { getMaxCountOfHaybales } = require('./A');

describe('1307A. Cow and Haybales', () => {
  it.each`
    n    | arr             | k    | result
    ${1} | ${[1, 0, 3, 2]} | ${5} | ${3}
    ${2} | ${[100, 1]}     | ${2} | ${101}
    ${3} | ${[0]}          | ${8} | ${0}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxCountOfHaybales(arr, k)).toBe(result);
  });
});
