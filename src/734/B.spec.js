const { getSumNiceNumbers } = require('./B');

describe('734B. Anton and Digits', () => {
  it.each`
    n    | playList        | result
    ${1} | ${[5, 1, 3, 4]} | ${800}
    ${2} | ${[1, 1, 1, 1]} | ${256}
  `('Base test: $n', ({ playList, result }) => {
    expect(getSumNiceNumbers(playList)).toBe(result);
  });
});
