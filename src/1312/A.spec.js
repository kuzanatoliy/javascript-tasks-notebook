const { isItPossibleToBuildAnotherConvex } = require('./A');

describe('1312A. Two Regular Polygons', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${6} | ${3} | ${'YES'}
    ${2} | ${7} | ${3} | ${'NO'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(isItPossibleToBuildAnotherConvex(a, b)).toBe(result);
  });
});
