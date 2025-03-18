const { isItPossibleToDrawSquare } = require('./A');

describe('2074A. Draw a Square', () => {
  it.each`
    n    | l    | r    | u    | d    | result
    ${1} | ${2} | ${2} | ${2} | ${2} | ${'YES'}
    ${2} | ${1} | ${2} | ${3} | ${4} | ${'NO'}
  `('Base test: $n', ({ l, r, d, u, result }) => {
    expect(isItPossibleToDrawSquare(l, r, d, u)).toBe(result);
  });
});
