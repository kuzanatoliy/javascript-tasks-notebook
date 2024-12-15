const { getCountOfColors } = require('./A');

describe('1209A. Paint the Numbers', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[10, 2, 3, 5, 4, 2]}      | ${3}
    ${2} | ${[100, 100, 100, 100]}     | ${1}
    ${3} | ${[7, 6, 5, 4, 3, 2, 2, 3]} | ${4}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfColors(array)).toBe(result);
  });
});
