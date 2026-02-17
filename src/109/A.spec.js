const { getLukyNumber } = require('./A');

describe('109A. Lucky Sum of Digits', () => {
  it.each`
    n    | num   | result
    ${1} | ${11} | ${'47'}
    ${2} | ${10} | ${-1}
    ${3} | ${64} | ${'4477777777'}
  `('Base test: $n', ({ num, result }) => {
    expect(getLukyNumber(num)).toBe(result);
  });
});
