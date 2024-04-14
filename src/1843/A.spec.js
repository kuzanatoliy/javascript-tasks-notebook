const { getMaxCost } = require('./A');

describe('1843A. Sasha and Array Coloring', () => {
  it.each`
    n    | array                  | result
    ${1} | ${[1, 5, 6, 3, 4]}     | ${7}
    ${2} | ${[5]}                 | ${0}
    ${3} | ${[1, 6, 3, 9]}        | ${11}
    ${4} | ${[1, 13, 9, 3, 7, 2]} | ${23}
    ${5} | ${[2, 2, 2, 2]}        | ${0}
    ${6} | ${[4, 5, 2, 2, 3]}     | ${5}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxCost(array)).toBe(result);
  });
});
