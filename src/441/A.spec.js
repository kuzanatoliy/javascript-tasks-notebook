const { getPossibleSellers } = require('./A');

describe('441A. Valera and Antique Items', () => {
  it.each`
    n    | k        | sellers                                                          | result
    ${1} | ${50000} | ${[[40000], [20000, 60000], [10000, 70000, 190000]]}             | ${[1, 2, 3]}
    ${1} | ${50000} | ${[[50000], [100000, 120000, 110000], [120000, 110000, 120000]]} | ${[]}
  `('Base test: $n', ({ k, sellers, result }) => {
    expect(getPossibleSellers(k, sellers)).toStrictEqual(result);
  });
});
