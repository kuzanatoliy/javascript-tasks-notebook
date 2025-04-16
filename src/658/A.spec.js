const { getWinner } = require('./A');

describe('658A. Bear and Reverse Radewoosh', () => {
  it.each`
    n    | cost | scores                              | times                              | result
    ${1} | ${2} | ${[50, 85, 250]}                    | ${[10, 15, 25]}                    | ${'Limak'}
    ${2} | ${6} | ${[50, 85, 250]}                    | ${[10, 15, 25]}                    | ${'Radewoosh'}
    ${3} | ${1} | ${[10, 20, 30, 40, 50, 60, 70, 80]} | ${[8, 10, 58, 63, 71, 72, 75, 76]} | ${'Tie'}
  `('Base test: $n', ({ cost, scores, times, result }) => {
    expect(getWinner(cost, scores, times)).toBe(result);
  });
});
