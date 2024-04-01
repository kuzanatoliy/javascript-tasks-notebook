const { isItPossibleToMove } = require('./A');

describe('515A. Drazil and Date', () => {
  it.each`
    n    | a     | b     | c     | result
    ${1} | ${5}  | ${5}  | ${11} | ${'NO'}
    ${2} | ${10} | ${15} | ${25} | ${'YES'}
    ${3} | ${0}  | ${5}  | ${1}  | ${'NO'}
    ${3} | ${0}  | ${0}  | ${2}  | ${'YES'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(isItPossibleToMove(a, b, c)).toBe(result);
  });
});
