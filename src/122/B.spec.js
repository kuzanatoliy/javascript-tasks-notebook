const { getHappyNumber } = require('./B');

describe('122A. Lucky Division', () => {
  it.each`
    n    | snum          | result
    ${1} | ${'047'}      | ${'4'}
    ${2} | ${'16'}       | ${-1}
    ${2} | ${'47274778'} | ${'7'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getHappyNumber(snum)).toBe(result);
  });
});
