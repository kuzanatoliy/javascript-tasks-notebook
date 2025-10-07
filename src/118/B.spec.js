const { buildMatrix } = require('./B');

describe('118B. Present from Lena', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[[' ', ' ', 0], [' ', 0, 1, 0], [0, 1, 2, 1, 0], [' ', 0, 1, 0], [' ', ' ', 0]]}
    ${2} | ${3} | ${[[' ', ' ', ' ', 0], [' ', ' ', 0, 1, 0], [' ', 0, 1, 2, 1, 0], [0, 1, 2, 3, 2, 1, 0], [' ', 0, 1, 2, 1, 0], [' ', ' ', 0, 1, 0], [' ', ' ', ' ', 0]]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildMatrix(num)).toStrictEqual(result);
  });
});
