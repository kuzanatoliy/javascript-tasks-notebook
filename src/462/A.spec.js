const { isItTrue } = require('./A');

describe('462A. Appleman and Easy Task', () => {
  it.each`
    n    | matrix                                                                                      | result
    ${1} | ${[['x', 'x', 'o'], ['x', 'o', 'x'], ['o', 'x', 'x']]}                                      | ${'YES'}
    ${2} | ${[['x', 'x', 'x', 'o'], ['x', 'o', 'x', 'o'], ['o', 'x', 'o', 'x'], ['x', 'x', 'x', 'x']]} | ${'NO'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(isItTrue(matrix)).toBe(result);
  });
});
