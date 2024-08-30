const { getMaxCountOfOperations } = require('./A');

describe('1856A. Tales of a Sort', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 2, 3]}          | ${0}
    ${2} | ${[2, 1, 2, 1, 2]}    | ${2}
    ${3} | ${[3, 1, 5, 4]}       | ${5}
    ${4} | ${[7, 7]}             | ${0}
    ${5} | ${[4, 1, 3, 2, 5]}    | ${4}
    ${6} | ${[2, 3, 1, 4, 5]}    | ${3}
    ${7} | ${[1000000000, 1, 2]} | ${1000000000}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxCountOfOperations(array)).toBe(result);
  });
});
