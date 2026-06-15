const { getHoleCount } = require('./B');

describe('967A. Paper Airplanes', () => {
  it.each`
    n    | a     | b     | arr                   | result
    ${1} | ${10} | ${3}  | ${[2, 2, 2, 2]}       | ${1}
    ${2} | ${80} | ${20} | ${[3, 2, 1, 4]}       | ${0}
    ${3} | ${10} | ${10} | ${[1000, 1, 1, 1, 1]} | ${4}
  `('Base test: $n', ({ a, b, arr, result }) => {
    expect(getHoleCount(a, b, arr)).toBe(result);
  });
});
