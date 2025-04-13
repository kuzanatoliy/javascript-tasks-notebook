const { getPoint } = require('./A');

describe('181A. Series of Crimes', () => {
  it.each`
    n    | matrix                                                 | result
    ${1} | ${[['.', '*'], ['.', '.'], ['*', '*']]}                | ${[1, 1]}
    ${2} | ${[['*', '.', '*'], ['*', '.', '.'], ['.', '.', '.']]} | ${[2, 3]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getPoint(matrix)).toStrictEqual(result);
  });
});
