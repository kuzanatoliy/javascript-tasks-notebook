const { isItPossibleToObtainAnotherRectangle } = require('./A');

describe('1928A. Rectangle Cutting', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${1} | ${'NO'}
    ${2} | ${2} | ${1} | ${'NO'}
    ${3} | ${2} | ${6} | ${'YES'}
    ${4} | ${3} | ${2} | ${'YES'}
    ${5} | ${2} | ${2} | ${'YES'}
    ${6} | ${2} | ${4} | ${'YES'}
    ${7} | ${6} | ${3} | ${'NO'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(isItPossibleToObtainAnotherRectangle(a, b)).toBe(result);
  });
});
