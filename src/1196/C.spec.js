const { getPoint } = require('./C');

describe('1196C. Robot Breakout', () => {
  it.each`
    n    | robots                                                          | result
    ${1} | ${[[-1, -2, 0, 0, 0, 0], [-1, -2, 0, 0, 0, 0]]}                 | ${[1, -1, -2]}
    ${2} | ${[[1, 5, 1, 1, 1, 1], [2, 5, 0, 1, 0, 1], [3, 5, 1, 0, 0, 0]]} | ${[1, 2, 5]}
    ${3} | ${[[1337, 1337, 0, 1, 1, 1], [1336, 1337, 1, 1, 0, 1]]}         | ${[0]}
    ${4} | ${[[3, 5, 1, 1, 1, 1]]}                                         | ${[1, -100000, -100000]}
  `('Base test: $n', ({ robots, result }) => {
    expect(getPoint(robots)).toStrictEqual(result);
  });
});
