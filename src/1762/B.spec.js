const { getTransformationList } = require('./B');

describe('1762B. Make array Good', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[2, 3, 5, 5]}      | ${[[1, 0], [2, 1], [3, 3], [4, 3]]}
    ${2} | ${[4, 8]}            | ${[[1, 0], [2, 0]]}
    ${3} | ${[3, 4, 343, 5, 6]} | ${[[1, 1], [2, 0], [3, 169], [4, 3], [5, 2]]}
    ${4} | ${[31, 5, 17]}       | ${[[1, 1], [2, 3], [3, 15]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getTransformationList(arr)).toStrictEqual(result);
  });
});
