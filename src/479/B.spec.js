const { getMoves } = require('./B');

describe('479B. Towers', () => {
  it.each`
    n    | maxMoves | towers             | result
    ${1} | ${2}     | ${[5, 8, 5]}       | ${[[0, 2], [2, 1], [2, 3]]}
    ${2} | ${4}     | ${[2, 2, 4]}       | ${[[1, 1], [3, 1]]}
    ${3} | ${3}     | ${[8, 3, 2, 6, 3]} | ${[[3, 3], [1, 3], [1, 3], [1, 2]]}
    ${4} | ${2}     | ${[27, 29]}        | ${[[0, 1], [2, 1]]}
  `('Base test: $n', ({ maxMoves, towers, result }) => {
    expect(getMoves(maxMoves, towers)).toStrictEqual(result);
  });
});
