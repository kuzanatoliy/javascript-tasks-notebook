const { getCountOfOperations } = require('./A');

describe('2176A. Operations with Inversions', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 2, 1]}       | ${2}
    ${2} | ${[1, 2, 3]}       | ${0}
    ${3} | ${[3, 3, 3]}       | ${0}
    ${4} | ${[3, 1, 4, 5, 2]} | ${2}
    ${5} | ${[1]}             | ${0}
    ${6} | ${[1, 2, 1]}       | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
