const { getCountOfCrosses } = require('./A');

describe('1106A. Lunar New Year and Cross Counting', () => {
  it.each`
    n    | matrix                                                                                                                                                                                              | result
    ${1} | ${[['.', '.', '.', '.', '.'], ['.', 'X', 'X', 'X', '.'], ['.', 'X', 'X', 'X', '.'], ['.', 'X', 'X', 'X', '.'], ['.', '.', '.', '.', '.']]}                                                          | ${1}
    ${2} | ${[['X', 'X'], ['X', 'X']]}                                                                                                                                                                         | ${0}
    ${3} | ${[['.', '.', '.', '.', '.', '.'], ['X', '.', 'X', '.', 'X', '.'], ['.', 'X', '.', 'X', '.', 'X'], ['X', '.', 'X', '.', 'X', '.'], ['.', 'X', '.', 'X', '.', 'X'], ['.', '.', '.', '.', '.', '.']]} | ${4}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfCrosses(matrix)).toBe(result);
  });
});
