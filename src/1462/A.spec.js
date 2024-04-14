const { getSequence } = require('./A');

describe('1462A. Favorite Sequence', () => {
  it.each`
    n    | array                                | result
    ${1} | ${[3, 4, 5, 2, 9, 1, 1]}             | ${[3, 1, 4, 1, 5, 9, 2]}
    ${2} | ${[9, 2, 7, 1]}                      | ${[9, 1, 2, 7]}
    ${3} | ${[8, 4, 3, 1, 2, 7, 8, 7, 9, 4, 2]} | ${[8, 2, 4, 4, 3, 9, 1, 7, 2, 8, 7]}
    ${4} | ${[42]}                              | ${[42]}
    ${5} | ${[11, 7]}                           | ${[11, 7]}
    ${6} | ${[1, 1, 1, 1, 1, 1, 1, 1]}          | ${[1, 1, 1, 1, 1, 1, 1, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getSequence(array)).toStrictEqual(result);
  });
});
