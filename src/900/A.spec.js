const { isItPossibleToTransfomr } = require('./A');

describe('900A. Find Extra One', () => {
  it.each`
    n    | points                                | result
    ${1} | ${[[1, 1], [-1, -1], [2, -1]]}        | ${'YES'}
    ${2} | ${[[1, 1], [2, 2], [-1, 1], [-2, 2]]} | ${'NO'}
    ${3} | ${[[1, 2], [2, 1], [4, 60]]}          | ${'YES'}
  `('Base test: $n', ({ points, result }) => {
    expect(isItPossibleToTransfomr(points)).toBe(result);
  });
});
