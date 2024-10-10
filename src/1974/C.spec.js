const { getCountOfPairs } = require('./C');

describe('1974C. Beautiful Triple Pairs', () => {
  it.each`
    n    | string                      | result
    ${1} | ${[3, 2, 2, 2, 3]}          | ${2}
    ${2} | ${[1, 2, 1, 2, 1]}          | ${0}
    ${3} | ${[1, 2, 3, 2, 2, 3, 4, 2]} | ${3}
    ${4} | ${[2, 1, 1, 1]}             | ${1}
    ${5} | ${[2, 1, 1, 2, 1, 1, 1, 1]} | ${8}
    ${6} | ${[2, 1, 1, 1, 1, 1, 1]}    | ${4}
    ${7} | ${[2, 1, 1, 1, 1, 1]}       | ${3}
    ${8} | ${[2, 1, 1, 1, 1]}          | ${2}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfPairs(string)).toBe(result);
  });
});
