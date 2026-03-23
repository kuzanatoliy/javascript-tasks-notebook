const { getMatrix } = require('./B');

describe('1816B. Grid Reconstruction', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[[3, 1], [2, 4]]}
    ${2} | ${4} | ${[[7, 3, 5, 1], [4, 6, 2, 8]]}
    ${3} | ${6} | ${[[11, 5, 9, 3, 7, 1], [6, 8, 4, 10, 2, 12]]}
  `('Base test: $n', ({ num, result }) => {
    expect(getMatrix(num)).toStrictEqual(result);
  });
});
