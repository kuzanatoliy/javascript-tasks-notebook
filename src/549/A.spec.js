const { getCountOfFaces } = require('./A');

describe('549A. Face Detection', () => {
  it.each`
    n    | matrix                                                                                      | result
    ${1} | ${[['x', 'x', 'x', 'x'], ['x', 'f', 'a', 'x'], ['x', 'c', 'e', 'x'], ['x', 'x', 'x', 'x']]} | ${1}
    ${2} | ${[['x', 'x'], ['c', 'f'], ['a', 'e'], ['x', 'x']]}                                         | ${1}
    ${3} | ${[['f', 'a', 'c'], ['c', 'e', 'f']]}                                                       | ${2}
    ${4} | ${[['f', 'a', 'c', 'e']]}                                                                   | ${0}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfFaces(matrix)).toBe(result);
  });
});
