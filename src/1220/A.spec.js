const { getMaxNumber } = require('./A');

describe('1220A. Cards', () => {
  it.each`
    n    | string          | result
    ${1} | ${'ezor'}       | ${[0]}
    ${2} | ${'nznooeeoer'} | ${[1, 1, 0]}
  `('Base test: $n', ({ string, result }) => {
    expect(getMaxNumber(string)).toStrictEqual(result);
  });
});
