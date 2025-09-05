const { isItPossibleToPaint } = require('./A');

describe('2134A. Painting With Two Colors', () => {
  it.each`
    n    | num           | a             | b             | result
    ${1} | ${5}          | ${3}          | ${1}          | ${'YES'}
    ${2} | ${4}          | ${1}          | ${2}          | ${'YES'}
    ${3} | ${7}          | ${7}          | ${4}          | ${'NO'}
    ${4} | ${8}          | ${3}          | ${7}          | ${'NO'}
    ${5} | ${1}          | ${1}          | ${1}          | ${'YES'}
    ${6} | ${1000000000} | ${1000000000} | ${1000000000} | ${'YES'}
    ${7} | ${3}          | ${2}          | ${1}          | ${'NO'}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(isItPossibleToPaint(num, a, b)).toBe(result);
  });
});
