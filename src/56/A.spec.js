const { getCountOfChecks } = require('./A');

describe('56A. Bar', () => {
  it.each`
    n    | arr                                | result
    ${1} | ${['18', 'VODKA', 'COKE', 19, 17]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfChecks(arr)).toBe(result);
  });
});
