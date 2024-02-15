const { getMaxProducts } = require('./A');

describe('1873B. Good Kid', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[2, 2, 1, 2]}                | ${16}
    ${2} | ${[0, 1, 2]}                   | ${2}
    ${3} | ${[4, 3, 2, 3, 4]}             | ${432}
    ${4} | ${[9, 9, 9, 9, 9, 9, 9, 9, 9]} | ${430467210}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxProducts(array)).toBe(result);
  });
});
