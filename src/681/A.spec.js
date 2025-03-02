const { isGoodPerformer } = require('./A');

describe('681A. A Good Contest', () => {
  it.each`
    n    | arr                                             | result
    ${1} | ${[[2526, 2537], [2084, 2214], [2833, 2749]]}   | ${'YES'}
    ${2} | ${[[2400, 2400], [2390, 2431], [-2500, -2450]]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isGoodPerformer(arr)).toBe(result);
  });
});
