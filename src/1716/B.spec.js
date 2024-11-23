const { getPermutationChain } = require('./B');

describe('1714B. Permutation Chain', () => {
  it.each`
    n    | origin | result
    ${1} | ${2}   | ${[[1, 2], [2, 1]]}
    ${2} | ${3}   | ${[[1, 2, 3], [2, 1, 3], [2, 3, 1]]}
  `('Base test: $n', ({ origin, result }) => {
    expect(getPermutationChain(origin)).toStrictEqual(result);
  });
});
