const { buildMatrix } = require('./B');

describe('1783B. Matrix of Differences', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[[4, 1], [2, 3]]}
    ${2} | ${3} | ${[[9, 1, 8], [3, 7, 2], [6, 4, 5]]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildMatrix(num)).toStrictEqual(result);
  });
});
