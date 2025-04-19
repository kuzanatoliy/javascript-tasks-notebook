const { isIdealGenerator } = require('./A');

describe('2093A. Ideal Generator', () => {
  it.each`
    n    | num     | result
    ${1} | ${1}    | ${'YES'}
    ${2} | ${2}    | ${'NO'}
    ${3} | ${3}    | ${'YES'}
    ${4} | ${73}   | ${'YES'}
    ${5} | ${1000} | ${'NO'}
  `('Base test: $n', ({ num, result }) => {
    expect(isIdealGenerator(num)).toBe(result);
  });
});
