const { getWinner } = require('./A');

describe('1672A. Log Chopping', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[2, 4, 2, 1]} | ${'errorgorn'}
    ${2} | ${[1]}          | ${'maomao90'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
