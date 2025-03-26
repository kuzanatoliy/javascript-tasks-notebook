const { getShortestPath } = require('./A');

describe('278A. Circle Line', () => {
  it.each`
    n    | arr               | s    | t    | result
    ${1} | ${[2, 3, 4, 9]}   | ${1} | ${3} | ${5}
    ${2} | ${[5, 8, 2, 100]} | ${4} | ${1} | ${15}
    ${3} | ${[1, 1, 1]}      | ${3} | ${1} | ${1}
    ${4} | ${[31, 41, 59]}   | ${1} | ${1} | ${0}
  `('Base test: $n', ({ arr, s, t, result }) => {
    expect(getShortestPath(arr, s, t)).toBe(result);
  });
});
