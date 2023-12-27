const { getNotAdjacentMatrix } = require('./C');

describe('1520C. Not Adjacent Matrix', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${2}   | ${-1}
    ${3} | ${3}   | ${[[1, 3, 5], [7, 9, 2], [4, 6, 8]]}
  `('Base test: $n', ({ number, result }) => {
    expect(getNotAdjacentMatrix(number)).toStrictEqual(result);
  });
});
