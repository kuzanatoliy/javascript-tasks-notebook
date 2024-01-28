const { isPasswordSymmetric } = require('./A');

describe('12A. Super Agent', () => {
  it.each`
    n    | password       | result
    ${1} | ${'XX.....XX'} | ${'YES'}
    ${2} | ${'X.XX.....'} | ${'NO'}
  `('Base test: $n', ({ password, result }) => {
    expect(isPasswordSymmetric(password)).toBe(result);
  });
});
