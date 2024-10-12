const { isItPossibleToTurn } = require('./B');

describe('1629B. GCD Arrays', () => {
  it.each`
    n    | l     | r     | k    | result
    ${1} | ${1}  | ${1}  | ${0} | ${'NO'}
    ${2} | ${3}  | ${5}  | ${1} | ${'NO'}
    ${3} | ${13} | ${13} | ${0} | ${'YES'}
    ${4} | ${4}  | ${4}  | ${0} | ${'YES'}
    ${5} | ${3}  | ${7}  | ${4} | ${'YES'}
    ${6} | ${4}  | ${10} | ${3} | ${'YES'}
    ${7} | ${2}  | ${4}  | ${0} | ${'NO'}
    ${8} | ${1}  | ${7}  | ${3} | ${'NO'}
    ${9} | ${1}  | ${5}  | ${3} | ${'YES'}
  `('Base test: $n', ({ l, r, k, result }) => {
    expect(isItPossibleToTurn(l, r, k)).toBe(result);
  });
});
