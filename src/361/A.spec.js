const { getMatrix } = require('./A');

describe('361A. Levko and Table', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${4} | ${[[4, 0], [0, 4]]}
    ${2} | ${4} | ${7} | ${[[7, 0, 0, 0], [0, 7, 0, 0], [0, 0, 7, 0], [0, 0, 0, 7]]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMatrix(num, k)).toStrictEqual(result);
  });
});
