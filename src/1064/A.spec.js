const { getCountOfOperations } = require('./A');

describe('1064A. Make a triangle!', () => {
  it.each`
    n    | arr              | result
    ${1} | ${[3, 4, 5]}     | ${0}
    ${2} | ${[2, 5, 3]}     | ${1}
    ${3} | ${[100, 10, 10]} | ${81}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
