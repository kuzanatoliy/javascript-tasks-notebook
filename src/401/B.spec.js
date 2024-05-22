const { getCountOfMissedGames } = require('./B');

describe('401B. Sereja and Contests', () => {
  it.each`
    n    | curr  | games                             | result
    ${1} | ${3}  | ${[[2, 1], [2, 2]]}               | ${[0, 0]}
    ${2} | ${9}  | ${[[1, 2, 3], [2, 8], [1, 4, 5]]} | ${[2, 3]}
    ${3} | ${10} | ${[]}                             | ${[5, 9]}
  `('Base test: $n', ({ curr, games, result }) => {
    expect(getCountOfMissedGames(curr, games)).toStrictEqual(result);
  });
});
