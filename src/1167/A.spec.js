const { isItPossibleToGetPhoneNumber } = require('./A');

describe('1167A. Telephone Number', () => {
  it.each`
    n    | number             | result
    ${1} | ${'7818005553535'} | ${'YES'}
    ${2} | ${'31415926535'}   | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(isItPossibleToGetPhoneNumber(number)).toBe(result);
  });
});
