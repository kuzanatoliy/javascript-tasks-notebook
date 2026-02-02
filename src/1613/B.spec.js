const { getPairs } = require('./B');

describe('1613B. Absent Remainder', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 4]}             | ${[[4, 1]]}
    ${2} | ${[2, 8, 3, 4]}       | ${[[8, 4], [8, 2]]}
    ${3} | ${[3, 8, 5, 9, 7]}    | ${[[9, 8], [9, 7]]}
    ${4} | ${[2, 7, 5, 3, 4, 8]} | ${[[8, 7], [8, 4], [8, 2]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPairs(arr)).toStrictEqual(result);
  });
});
