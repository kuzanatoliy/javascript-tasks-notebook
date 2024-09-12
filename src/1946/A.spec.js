const { getCountOfOperations } = require('./A');

describe('1946A. Median of an Array', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 2, 8]}          | ${1}
    ${2} | ${[7, 3, 3, 1]}       | ${2}
    ${3} | ${[1000000000]}       | ${1}
    ${4} | ${[5, 5, 5, 4, 5]}    | ${3}
    ${5} | ${[2, 1, 2, 3, 1, 4]} | ${2}
    ${6} | ${[1, 2]}             | ${1}
    ${7} | ${[1, 1]}             | ${2}
    ${8} | ${[5, 5, 5, 5]}       | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
