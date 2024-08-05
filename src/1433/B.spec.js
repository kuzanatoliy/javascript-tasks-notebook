const { getCountOfMoves } = require('./B');

describe('1433B. Yet Another Bookshelf', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[0, 0, 1, 0, 1, 0, 1]} | ${2}
    ${2} | ${[1, 0, 0]}             | ${0}
    ${3} | ${[1, 1, 0, 0, 1]}       | ${2}
    ${4} | ${[1, 0, 0, 0, 0, 1]}    | ${4}
    ${5} | ${[1, 1, 0, 1, 1]}       | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfMoves(array)).toBe(result);
  });
});
