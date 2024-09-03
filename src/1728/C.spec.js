const { getCountOfOperations } = require('./C');

describe('1728B. Best Permutation', () => {
  it.each`
    n    | array1                                                             | array2                                                               | result
    ${1} | ${[1]}                                                             | ${[1000]}                                                            | ${2}
    ${2} | ${[1, 2, 3, 4]}                                                    | ${[3, 1, 4, 2]}                                                      | ${0}
    ${3} | ${[2, 9, 3]}                                                       | ${[1, 100, 9]}                                                       | ${2}
    ${4} | ${[75019, 709259, 5, 611271314, 9024533, 81871864, 9, 3, 6, 4865]} | ${[9503, 2, 371245467, 6, 7, 37376159, 8, 364036498, 52295554, 169]} | ${18}
  `('Base test: $n', ({ array1, array2, result }) => {
    expect(getCountOfOperations(array1, array2)).toStrictEqual(result);
  });
});
