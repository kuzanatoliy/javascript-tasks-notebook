const { getLotteryWinners } = require('./B');

describe('1730A. Planets', () => {
  it.each`
    n    | participants                         | result
    ${1} | ${[[1, 2, 4, 8], [2, 9, 1], [1, 4]]} | ${[8, 2, 1]}
    ${2} | ${[[1, 2], [2, 1]]}                  | ${-1}
    ${3} | ${[[1, 2, 3, 4], [1], [4], [3]]}     | ${[2, 1, 4, 3]}
  `('Base test: $n', ({ participants, result }) => {
    expect(getLotteryWinners(participants)).toStrictEqual(result);
  });
});
