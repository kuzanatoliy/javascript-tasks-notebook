const { isPossibleToWin } = require('./A');

describe('469A. I Wanna Be the Guy', () => {
  it.each`
    n    | levels | firstWins       | secondWins   | result
    ${1} | ${4}   | ${[3, 1, 2, 3]} | ${[2, 2, 4]} | ${'I become the guy.'}
    ${2} | ${4}   | ${[3, 1, 2, 3]} | ${[2, 2, 3]} | ${'Oh, my keyboard!'}
  `('Base test: $n', ({ levels, firstWins, secondWins, result }) => {
    expect(isPossibleToWin(levels, firstWins, secondWins)).toBe(result);
  });
});
