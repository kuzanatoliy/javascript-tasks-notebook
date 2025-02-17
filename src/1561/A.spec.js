const { sortArray } = require('./A');

describe('1561A. Simply Strange Sort', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[3, 2, 1]}             | ${3}
    ${2} | ${[4, 5, 7, 1, 3, 2, 6]} | ${5}
    ${3} | ${[1, 2, 3, 4, 5]}       | ${0}
    ${3} | ${[2, 4, 1, 3, 5]}       | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(sortArray(arr)).toStrictEqual(result);
  });
});
