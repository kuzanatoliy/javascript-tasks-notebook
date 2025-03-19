const { getMaxCountOfPairs } = require('./A');

describe('629A. Far Relative’s Birthday Cake', () => {
  it.each`
    n    | matrix                                                                                      | result
    ${1} | ${[['.', 'C', 'C'], ['C', '.', '.'], ['C', '.', 'C']]}                                      | ${4}
    ${2} | ${[['C', 'C', '.', '.'], ['C', '.', '.', 'C'], ['.', 'C', 'C', '.'], ['.', 'C', 'C', '.']]} | ${9}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMaxCountOfPairs(matrix)).toBe(result);
  });
});
