const { getColumns } = require('./B');

describe('2009B. osu!mania', () => {
  it.each`
    n    | rows                                | result
    ${1} | ${['#...', '.#..', '..#.', '...#']} | ${[4, 3, 2, 1]}
    ${2} | ${['.#..', '.#..']}                 | ${[2, 2]}
    ${3} | ${['...#']}                         | ${[4]}
  `('Base test: $n', ({ rows, result }) => {
    expect(getColumns(rows)).toStrictEqual(result);
  });
});
