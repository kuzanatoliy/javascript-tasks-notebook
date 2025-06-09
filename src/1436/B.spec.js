const { buildSquare } = require('./B');

describe('1436B. Prime Square', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[[1, 1, 0, 0], [1, 1, 1, 0], [0, 1, 1, 1], [0, 0, 1, 1]]}
    ${2} | ${2} | ${[[1, 1], [1, 1]]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildSquare(num)).toStrictEqual(result);
  });
});
