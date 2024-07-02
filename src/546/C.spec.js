const { getBattleData } = require('./C');

describe('546C. Soldier and Cards', () => {
  it.each`
    n    | player1   | player2   | result
    ${1} | ${[1, 3]} | ${[4, 2]} | ${[6, 2]}
    ${2} | ${[2]}    | ${[1, 3]} | ${[-1]}
  `('Base test: $n', ({ player1, player2, result }) => {
    expect(getBattleData(player1, player2)).toStrictEqual(result);
  });
});
