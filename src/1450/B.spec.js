const { getCountOfOperations } = require('./B');

describe('1450B. Balls of Steel', () => {
  it.each`
    n    | k    | points                              | result
    ${1} | ${2} | ${[[0, 0], [3, 3], [1, 1]]}         | ${-1}
    ${2} | ${3} | ${[[6, 7], [8, 8], [6, 9]]}         | ${1}
    ${3} | ${1} | ${[[0, 0], [0, 1], [0, 2], [0, 3]]} | ${-1}
  `('Base test: $n', ({ k, points, result }) => {
    expect(getCountOfOperations(k, points)).toBe(result);
  });
});
