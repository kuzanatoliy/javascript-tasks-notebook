const { isItPossibleToWin } = require('./C');

describe('1929C. Sasha and the Casino', () => {
  it.each`
    n    | k     | x     | a             | result
    ${1} | ${2}  | ${1}  | ${7}          | ${'YES'}
    ${2} | ${2}  | ${1}  | ${1}          | ${'NO'}
    ${3} | ${2}  | ${3}  | ${15}         | ${'YES'}
    ${4} | ${3}  | ${3}  | ${6}          | ${'NO'}
    ${5} | ${4}  | ${4}  | ${5}          | ${'NO'}
    ${6} | ${5}  | ${4}  | ${7}          | ${'YES'}
    ${7} | ${4}  | ${88} | ${1000000000} | ${'NO'}
    ${8} | ${25} | ${69} | ${231}        | ${'NO'}
    ${9} | ${13} | ${97} | ${18806}      | ${'NO'}
  `('Base test: $n', ({ k, x, a, result }) => {
    expect(isItPossibleToWin(k, x, a)).toBe(result);
  });
});
