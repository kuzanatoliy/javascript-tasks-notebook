const { isGoodLab } = require('./A');

describe('821A. Okabe and Future Gadget Laboratory', () => {
  it.each`
    n    | matrix                                                       | result
    ${1} | ${[[1, 1, 2], [2, 3, 1], [6, 4, 1]]}                         | ${'YES'}
    ${2} | ${[[1, 5, 2], [1, 1, 1], [1, 2, 3]]}                         | ${'NO'}
    ${3} | ${[[1, 1, 1, 1], [1, 11, 1, 2], [2, 5, 1, 4], [3, 9, 4, 1]]} | ${'YES'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(isGoodLab(matrix)).toBe(result);
  });
});
