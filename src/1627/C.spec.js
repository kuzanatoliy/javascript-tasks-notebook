const { getWeights } = require('./C');

describe('1627C. Not Assigning', () => {
  it.each`
    n    | ways                                                | result
    ${1} | ${[[1, 2]]}                                         | ${[3]}
    ${2} | ${[[1, 3], [4, 3], [2, 1]]}                         | ${[2, 3, 3]}
    ${2} | ${[[1, 2], [1, 3], [3, 4], [3, 5], [6, 2], [7, 2]]} | ${[-1]}
  `('Base test: $n', ({ ways, result }) => {
    expect(getWeights(ways)).toStrictEqual(result);
  });
});
