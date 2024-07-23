const { isItPossibleToGetArithmeticProgression } = require('./B');

describe('1624B. Make AP', () => {
  it.each`
    n     | a     | b            | c     | result
    ${1}  | ${10} | ${5}         | ${30} | ${'YES'}
    ${2}  | ${30} | ${5}         | ${10} | ${'YES'}
    ${3}  | ${1}  | ${2}         | ${3}  | ${'YES'}
    ${4}  | ${1}  | ${6}         | ${3}  | ${'YES'}
    ${5}  | ${2}  | ${6}         | ${3}  | ${'NO'}
    ${6}  | ${1}  | ${1}         | ${1}  | ${'YES'}
    ${7}  | ${1}  | ${1}         | ${2}  | ${'NO'}
    ${8}  | ${1}  | ${1}         | ${3}  | ${'YES'}
    ${9}  | ${1}  | ${100000000} | ${1}  | ${'YES'}
    ${10} | ${2}  | ${1}         | ${1}  | ${'NO'}
    ${11} | ${1}  | ${2}         | ${2}  | ${'YES'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(isItPossibleToGetArithmeticProgression(a, b, c)).toBe(result);
  });
});
