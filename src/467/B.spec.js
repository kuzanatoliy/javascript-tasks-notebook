const { checkCountOfFriends } = require('./B');

describe('467B. Fedor and New Game', () => {
  it.each`
    n    | players            | types | dif  | result
    ${1} | ${[8, 5, 111, 17]} | ${7}  | ${1} | ${0}
    ${2} | ${[1, 2, 3, 4]}    | ${3}  | ${3} | ${3}
  `('Base test: $n', ({ players, types, dif, result }) => {
    expect(checkCountOfFriends(players, types, dif)).toBe(result);
  });
});
