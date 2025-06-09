const { buildMatrix } = require('./B');

describe('1699B. Almost Ternary Matrix', () => {
  it.each`
    n    | m    | num  | result
    ${1} | ${2} | ${4} | ${[[1, 0, 0, 1], [0, 1, 1, 0]]}
    ${2} | ${2} | ${2} | ${[[1, 0], [0, 1]]}
    ${3} | ${4} | ${4} | ${[[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]}
  `('Base test: $n', ({ m, num, result }) => {
    expect(buildMatrix(m, num)).toStrictEqual(result);
  });
});
