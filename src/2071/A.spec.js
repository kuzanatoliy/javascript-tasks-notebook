const { isFirstSpectacor } = require('./A');

describe('2071A. The Play Never Ends', () => {
  it.each`
    n    | num           | result
    ${1} | ${1}          | ${'YES'}
    ${2} | ${2}          | ${'NO'}
    ${3} | ${333}        | ${'NO'}
    ${4} | ${1000000000} | ${'YES'}
  `('Base test: $n', ({ num, result }) => {
    expect(isFirstSpectacor(num)).toBe(result);
  });
});
