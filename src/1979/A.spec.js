const { getMaxInt } = require('./A');

describe('1979A. Guess the Maximum', () => {
  it.each`
    n    | array                              | result
    ${1} | ${[2, 4, 1, 7]}                    | ${3}
    ${2} | ${[1, 2, 3, 4, 5]}                 | ${1}
    ${3} | ${[1, 1]}                          | ${0}
    ${4} | ${[37, 8, 16]}                     | ${15}
    ${5} | ${[10, 10, 10, 10, 9]}             | ${9}
    ${6} | ${[3, 12, 9, 5, 2, 3, 2, 9, 8, 2]} | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxInt(array)).toBe(result);
  });
});
