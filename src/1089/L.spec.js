const { getMinTotalTime } = require('./L');

describe('1089L. Lazyland', () => {
  it.each`
    n    | k    | num  | jobs                        | times                       | result
    ${1} | ${8} | ${7} | ${[1, 1, 3, 1, 5, 3, 7, 1]} | ${[5, 7, 4, 8, 1, 3, 5, 2]} | ${10}
    ${2} | ${3} | ${3} | ${[3, 1, 2]}                | ${[5, 3, 4]}                | ${0}
  `('Base test: $n', ({ k, num, jobs, times, result }) => {
    expect(getMinTotalTime(k, num, jobs, times)).toBe(result);
  });
});
