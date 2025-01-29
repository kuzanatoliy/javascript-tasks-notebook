const { isItPossibleToChooseSize } = require('./A');

describe('1436A. Marketing Scheme', () => {
  it.each`
    n    | l      | r      | result
    ${1} | ${3}   | ${4}   | ${'YES'}
    ${2} | ${1}   | ${2}   | ${'NO'}
    ${3} | ${120} | ${150} | ${'YES'}
  `('Base test: $n', ({ l, r, result }) => {
    expect(isItPossibleToChooseSize(l, r)).toBe(result);
  });
});
