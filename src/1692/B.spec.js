const { getLength } = require('./B');

describe('1692B. All Distinct', () => {
  it.each`
    n    | distances                 | result
    ${1} | ${[2, 2, 2, 3, 3, 3]}     | ${2}
    ${2} | ${[9, 1, 9, 9, 1]}        | ${1}
    ${3} | ${[15, 16, 16, 15]}       | ${2}
    ${4} | ${[10, 100, 1000, 10000]} | ${4}
  `('Base test: $n', ({ distances, result }) => {
    expect(getLength(distances)).toBe(result);
  });
});
