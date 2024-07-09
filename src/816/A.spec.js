const { getDelay } = require('./A');

describe('816A. Karen and Morning', () => {
  it.each`
    n    | time       | result
    ${1} | ${'05:39'} | ${11}
    ${2} | ${'13:31'} | ${0}
    ${3} | ${'23:59'} | ${1}
  `('Base test: $n', ({ time, result }) => {
    expect(getDelay(time)).toBe(result);
  });
});
