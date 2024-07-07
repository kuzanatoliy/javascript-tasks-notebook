const { getCountOfOperations } = require('./A');

describe('1853A. Desorting', () => {
  it.each`
    n    | array             | result
    ${1} | ${[1, 1]}         | ${1}
    ${2} | ${[1, 8, 10, 13]} | ${2}
    ${3} | ${[1, 3, 2]}      | ${0}
    ${4} | ${[1, 9, 14]}     | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
