const { getCountOfPoints } = require('./A');

describe('961A. Tetris', () => {
  it.each`
    n    | num  | order                          | result
    ${1} | ${3} | ${[1, 1, 2, 2, 2, 3, 1, 2, 3]} | ${2}
  `('Base test: $n', ({ num, order, result }) => {
    expect(getCountOfPoints(num, order)).toBe(result);
  });
});
