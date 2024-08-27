const { getWinner } = require('./B');

describe('1846B. Rudolph and Tic-Tac-Toe', () => {
  it.each`
    n    | nails                                                  | result
    ${1} | ${[['+', 'X', '+'], ['O', 'X', 'O'], ['O', 'X', '.']]} | ${'X'}
    ${2} | ${[['O', '+', '.'], ['+', 'O', 'X'], ['X', '+', 'O']]} | ${'O'}
    ${3} | ${[['.', 'X', 'O'], ['O', 'X', '.'], ['+', '+', '+']]} | ${'+'}
    ${4} | ${[['O', '.', '+'], ['X', '.', 'O'], ['+', '.', '.']]} | ${'DRAW'}
    ${5} | ${[['.', '+', '+'], ['X', '.', 'O'], ['+', '.', '.']]} | ${'DRAW'}
  `('Base test: $n', ({ nails, result }) => {
    expect(getWinner(nails)).toBe(result);
  });
});
