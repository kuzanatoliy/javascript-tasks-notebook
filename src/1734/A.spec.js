const { getMinCountOfOperations } = require('./A');

describe('1734A. Select Three Sticks', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1, 2, 3]}                | ${2}
    ${2} | ${[7, 3, 7, 3]}             | ${4}
    ${3} | ${[3, 4, 2, 1, 1]}          | ${1}
    ${4} | ${[3, 1, 4, 1, 5, 9, 2, 6]} | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfOperations(array)).toBe(result);
  });
});
