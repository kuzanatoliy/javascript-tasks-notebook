const { getCountOfVisitors } = require('./B');

describe('1781B. Going to the Cinema', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 1]}                   | ${2}
    ${2} | ${[0, 1, 2, 3, 4, 5, 6]}    | ${1}
    ${3} | ${[6, 0, 3, 3, 6, 7, 2, 7]} | ${3}
    ${4} | ${[3, 0, 0, 3, 3]}          | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfVisitors(arr)).toBe(result);
  });
});
