const { getReordersCount } = require('./A');

describe('1827A. Matching', () => {
  it.each`
    n    | array1                                               | array2                                         | result
    ${1} | ${[9, 6, 8, 4, 5, 2]}                                | ${[4, 1, 5, 6, 3, 1]}                          | ${32}
    ${2} | ${[4, 3, 2]}                                         | ${[3, 4, 9]}                                   | ${0}
    ${3} | ${[2]}                                               | ${[1]}                                         | ${1}
    ${4} | ${[2, 3, 4]}                                         | ${[1, 3, 3]}                                   | ${0}
    ${5} | ${[2, 3, 7, 10, 23, 28, 29, 50, 69, 135, 420, 1000]} | ${[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]} | ${13824}
  `('Base test: $n', ({ array1, array2, result }) => {
    expect(getReordersCount(array1, array2)).toBe(result);
  });
});
