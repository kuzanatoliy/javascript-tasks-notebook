const { getMaxArea } = require('./E');

describe('1468E. Four Segments', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 2, 3, 4]}       | ${3}
    ${2} | ${[5, 5, 5, 5]}       | ${25}
    ${3} | ${[1, 2, 3, 4]}       | ${3}
    ${4} | ${[100, 20, 20, 100]} | ${2000}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxArea(array)).toBe(result);
  });
});
