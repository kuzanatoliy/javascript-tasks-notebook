const { getMinCountOfOperations } = require('./B');

describe('1992B. Angry Monk', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[3, 1, 1]}          | ${2}
    ${2} | ${[3, 2]}             | ${3}
    ${3} | ${[2, 3, 1, 5]}       | ${9}
    ${4} | ${[1, 6, 1, 1, 1, 6]} | ${15}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfOperations(array)).toBe(result);
  });
});
