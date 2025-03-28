const { getNumber } = require('./A');

describe('1130A. Be Positive', () => {
  it.each`
    n    | arr                       | result
    ${1} | ${[10, 0, -7, 2, 6]}      | ${1000}
    ${2} | ${[0, 0, 1, -1, 0, 0, 2]} | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getNumber(arr)).toBe(result);
  });
});
