const { getMinDifference } = require('./A');

describe('1348A. Sum of Round Numbers', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${2}
    ${2} | ${4}   | ${6}
  `('Base test: $n', ({ number, result }) => {
    expect(getMinDifference(number)).toBe(result);
  });
});
