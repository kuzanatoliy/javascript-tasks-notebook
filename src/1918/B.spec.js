const { transformArrays } = require('./B');

describe('1918B. Minimize Inversions', () => {
  it.each`
    n    | arr1                  | arr2                  | result
    ${1} | ${[1, 2, 3, 4, 5]}    | ${[5, 4, 3, 2, 1]}    | ${[[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]}
    ${2} | ${[3, 1, 2]}          | ${[3, 1, 2]}          | ${[[1, 2, 3], [1, 2, 3]]}
    ${3} | ${[2, 5, 6, 1, 3, 4]} | ${[1, 5, 3, 6, 2, 4]} | ${[[1, 2, 3, 4, 5, 6], [6, 1, 2, 4, 5, 3]]}
  `('Base test: $n', ({ arr1, arr2, result }) => {
    expect(transformArrays(arr1, arr2)).toStrictEqual(result);
  });
});
