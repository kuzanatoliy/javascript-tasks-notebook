const { getCountOfOperations } = require('./A');

describe('1538A. Stone Game', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1, 5, 4, 3, 2]}          | ${2}
    ${2} | ${[2, 1, 3, 4, 5, 6, 8, 7]} | ${4}
    ${3} | ${[4, 2, 3, 1, 8, 6, 7, 5]} | ${5}
    ${4} | ${[3, 4, 2, 1]}             | ${3}
    ${5} | ${[2, 3, 1, 4]}             | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
