const { checkEvenPices } = require('./A');

describe('4A. Watermelon', () => {
  it.each`
    n    | weight | result
    ${1} | ${8}   | ${'YES'}
  `('Base test: $n', ({ weight, result }) => {
    expect(checkEvenPices(weight)).toBe(result);
  });

  it.each`
    n    | weight | result
    ${1} | ${2}   | ${'NO'}
    ${2} | ${3}   | ${'NO'}
    ${3} | ${6}   | ${'YES'}
  `('Special test: $n', ({ weight, result }) => {
    expect(checkEvenPices(weight)).toBe(result);
  });
});
