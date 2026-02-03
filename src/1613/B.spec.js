const { getPairs } = require('./B');

describe('1613B. Absent Remainder', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 4]}             | ${[[4, 1]]}
    ${2} | ${[2, 8, 3, 4]}       | ${[[3, 2], [4, 2]]}
    ${3} | ${[3, 8, 5, 9, 7]}    | ${[[5, 3], [7, 3]]}
    ${4} | ${[2, 7, 5, 3, 4, 8]} | ${[[3, 2], [4, 2], [5, 2]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPairs(arr)).toStrictEqual(result);
  });
});
