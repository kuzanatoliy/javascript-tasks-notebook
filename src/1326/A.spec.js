const { buildNumber } = require('./A');

describe('1326A. Bad Ugly Numbers', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${-1}
    ${2} | ${2} | ${'23'}
    ${3} | ${3} | ${'233'}
    ${4} | ${4} | ${'2333'}
  `('Base test: $n', ({ num, result }) => {
    expect(buildNumber(num)).toBe(result);
  });
});
