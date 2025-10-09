const { isItPossibleToObtainStr } = require('./A');

describe('1469A. Regular Bracket Sequence', () => {
  it.each`
    n    | str       | result
    ${1} | ${'()'}   | ${'YES'}
    ${2} | ${'(?)'}  | ${'NO'}
    ${3} | ${'(??)'} | ${'YES'}
    ${4} | ${'??()'} | ${'YES'}
    ${5} | ${')?(?'} | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToObtainStr(str)).toBe(result);
  });
});
