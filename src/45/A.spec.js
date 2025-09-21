const { getMonth } = require('./A');

describe('45A. Codecraft III', () => {
  it.each`
    n    | month         | delay | result
    ${1} | ${'November'} | ${3}  | ${'February'}
    ${2} | ${'May'}      | ${24} | ${'May'}
  `('Base test: $n', ({ month, delay, result }) => {
    expect(getMonth(month, delay)).toBe(result);
  });
});
