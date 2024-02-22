const { getLongestBlankLength } = require('./B');

describe('1829B. Blank Space', () => {
  it.each`
    n    | string                         | result
    ${1} | ${[1, 0, 0, 1, 0]}             | ${2}
    ${2} | ${[0, 1, 1, 1]}                | ${1}
    ${3} | ${[0]}                         | ${1}
    ${4} | ${[1, 1, 1]}                   | ${0}
    ${5} | ${[1, 0, 0, 0, 1, 0, 0, 0, 1]} | ${3}
  `('Base test: $n', ({ string, result }) => {
    expect(getLongestBlankLength(string)).toBe(result);
  });
});
