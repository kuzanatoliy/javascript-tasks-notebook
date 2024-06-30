const { getArrays } = require('./A');

describe('1859A. United We Stand', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[2, 2, 2]}             | ${[-1]}
    ${2} | ${[1, 2, 3, 4, 5]}       | ${[[1], [2, 3, 4, 5]]}
    ${3} | ${[1, 3, 5]}             | ${[[1], [3, 5]]}
    ${4} | ${[1, 7, 7, 2, 9, 1, 4]} | ${[[1, 1], [2, 4, 7, 7, 9]]}
    ${5} | ${[4, 8, 12, 12, 4]}     | ${[[4, 4], [8, 12, 12]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getArrays(array)).toStrictEqual(result);
  });
});
