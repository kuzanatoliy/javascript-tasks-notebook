const { getCountOfOperations } = require('./C');

describe('2149C. MEX rose', () => {
  it.each`
    n    | arr                      | k    | result
    ${1} | ${[0]}                   | ${0} | ${1}
    ${2} | ${[0, 2, 3]}             | ${1} | ${0}
    ${3} | ${[0, 1, 2, 3, 4]}       | ${5} | ${0}
    ${4} | ${[0, 3, 4, 2, 6, 2]}    | ${2} | ${2}
    ${5} | ${[0, 1, 5, 4, 4, 7, 3]} | ${4} | ${2}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
