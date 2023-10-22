const { checkPlayersForNextRound } = require('./A');

describe('A. Next Round', () => {
  it.each`
    n    | place | array                        | result
    ${1} | ${5}  | ${[10, 9, 8, 7, 7, 7, 5, 5]} | ${6}
    ${2} | ${2}  | ${[0, 0, 0, 0]}              | ${0}
  `('Base test: $n', ({ place, array, result }) => {
    expect(checkPlayersForNextRound(place, array)).toBe(result);
  });
});
