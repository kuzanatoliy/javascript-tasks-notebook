const { getMaxScore } = require('./B');

describe('1293B. JOE is on TV!', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${1}
    ${2} | ${2} | ${1.5}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxScore(num)).toBe(result);
  });
});
