const { checkLuckyNumber } = require('./A');

describe('110A. Nearly Lucky Number', () => {
  it.each`
    n    | number                   | result
    ${1} | ${'40047'}               | ${'NO'}
    ${2} | ${'7747774'}             | ${'YES'}
    ${3} | ${'1000000000000000000'} | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(checkLuckyNumber(number)).toBe(result);
  });

  it.each`
    n    | number | result
    ${1} | ${'7'} | ${'NO'}
    ${2} | ${'4'} | ${'NO'}
  `('Special test: $n', ({ number, count, result }) => {
    expect(checkLuckyNumber(number, count)).toBe(result);
  });
});
