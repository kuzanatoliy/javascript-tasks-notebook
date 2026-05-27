const { getPairs } = require('./A');

describe('322A. Ciel and Dancing', () => {
  it.each`
    n    | nm   | ng   | result
    ${1} | ${2} | ${1} | ${[[1, 1], [2, 1]]}
    ${2} | ${2} | ${2} | ${[[1, 1], [1, 2], [2, 1]]}
  `('Base test: $n', ({ nm, ng, result }) => {
    expect(getPairs(nm, ng)).toStrictEqual(result);
  });
});
