const { getDistance } = require('./B');

describe('14A. Letter', () => {
  it.each`
    n    | runs                         | x    | result
    ${1} | ${[[0, 7], [14, 2], [4, 6]]} | ${3} | ${1}
    ${2} | ${[[0, 10]]}                 | ${1} | ${0}
  `('Base test: $n', ({ runs, x, result }) => {
    expect(getDistance(runs, x)).toStrictEqual(result);
  });
});
