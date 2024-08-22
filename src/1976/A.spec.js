const { isGoodPassword } = require('./A');

describe('1976A. Verify Password', () => {
  it.each`
    n    | password       | result
    ${1} | ${'12ac'}      | ${'YES'}
    ${2} | ${'123wa'}     | ${'NO'}
    ${3} | ${'allllmost'} | ${'YES'}
    ${4} | ${'ac123'}     | ${'NO'}
    ${5} | ${'011679'}    | ${'YES'}
  `('Base test: $n', ({ password, result }) => {
    expect(isGoodPassword(password)).toBe(result);
  });
});
