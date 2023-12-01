const { getLastTwoNumbers } = require('./A');

describe('630A. Again Twenty Five!', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${25}
    ${1} | ${100} | ${25}
  `('Base test: $n', ({ number, result }) => {
    expect(getLastTwoNumbers(number)).toBe(result);
  });
});
