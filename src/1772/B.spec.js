const { isBeautifulMatrix } = require('./B');

describe('1772B. Matrix Rotation', () => {
  it.each`
    n    | matrix               | result
    ${1} | ${[[1, 3], [5, 7]]}  | ${'YES'}
    ${2} | ${[[8, 10], [3, 4]]} | ${'YES'}
    ${3} | ${[[8, 10], [4, 3]]} | ${'NO'}
    ${4} | ${[[6, 1], [9, 2]]}  | ${'YES'}
    ${5} | ${[[7, 5], [4, 2]]}  | ${'YES'}
    ${6} | ${[[1, 2], [4, 3]]}  | ${'NO'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(isBeautifulMatrix(matrix)).toBe(result);
  });
});
