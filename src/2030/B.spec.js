const { getString } = require('./B');

describe('2030B. Minimise Oneness', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'1'}
    ${2} | ${2} | ${'10'}
    ${3} | ${3} | ${'100'}
  `('Base test: $n', ({ num, result }) => {
    expect(getString(num)).toBe(result);
  });
});
