const { isItPossibleToTransform } = require('./B');

describe('1797B. Li Hua and Pattern', () => {
  it.each`
    n    | matrix                                                                                   | k    | result
    ${1} | ${[[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 0], [1, 1, 1, 1]]}                              | ${0} | ${'NO'}
    ${2} | ${[[1, 0, 1, 1], [1, 0, 0, 0], [0, 1, 0, 1], [1, 1, 0, 1]]}                              | ${3} | ${'YES'}
    ${3} | ${[[0, 0, 0, 0, 0], [0, 1, 1, 1, 1], [0, 1, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]]} | ${4} | ${'YES'}
  `('Base test: $n', ({ matrix, k, result }) => {
    expect(isItPossibleToTransform(matrix, k)).toBe(result);
  });
});
