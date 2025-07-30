const { isItPossibleBuyChunks } = require('./A');

describe('903A. Hungry Student Problem', () => {
  it.each`
    n    | points | result
    ${1} | ${6}   | ${'YES'}
    ${2} | ${5}   | ${'NO'}
  `('Base test: $n', ({ points, result }) => {
    expect(isItPossibleBuyChunks(points)).toBe(result);
  });
});
