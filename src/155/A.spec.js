const { getCountOfAmazingPerformances } = require('./A');

describe('155A. I love %username%', () => {
  it.each`
    n    | order                                                           | result
    ${1} | ${[100, 50, 200, 150, 200]}                                     | ${2}
    ${2} | ${[4664, 6496, 5814, 7010, 5762, 5736, 6944, 4850, 3698, 7242]} | ${4}
  `('Base test: $n', ({ order, result }) => {
    expect(getCountOfAmazingPerformances(order)).toBe(result);
  });
});
