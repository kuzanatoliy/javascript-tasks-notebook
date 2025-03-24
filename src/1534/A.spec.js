const { isItPossibleToTurnMatrix } = require('./A');

describe('1534A. Colour the Flag', () => {
  it.each`
    n    | matrix                                                                                                                              | result
    ${1} | ${[['.', 'R', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.'], ['.', 'W', '.', '.', '.', '.']]} | ${['YES', [['W', 'R', 'W', 'R', 'W', 'R'], ['R', 'W', 'R', 'W', 'R', 'W'], ['W', 'R', 'W', 'R', 'W', 'R'], ['R', 'W', 'R', 'W', 'R', 'W']]]}
    ${2} | ${[['.', 'R', '.', 'W'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']]}                                         | ${['NO']}
    ${3} | ${[['R', 'W', 'R', 'W', 'R']]}                                                                                                      | ${['YES', ['R', 'W', 'R', 'W', 'R']]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(isItPossibleToTurnMatrix(matrix)).toStrictEqual(result);
  });
});
