const { isItPossibleToCut } = require('./B');

describe('1351B. Square?', () => {
  it.each`
    n    | s1        | s2        | result
    ${1} | ${[2, 3]} | ${[3, 1]} | ${'YES'}
    ${2} | ${[3, 2]} | ${[1, 3]} | ${'YES'}
    ${3} | ${[3, 3]} | ${[1, 3]} | ${'NO'}
  `('Base test: $n', ({ s1, s2, result }) => {
    expect(isItPossibleToCut(s1, s2)).toBe(result);
  });
});
