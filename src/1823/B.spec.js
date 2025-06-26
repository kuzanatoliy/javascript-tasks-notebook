const { isItPossibleToSort } = require('./B');

describe('1823B. Sort with Step', () => {
  it.each`
    n    | arr                                | k    | result
    ${1} | ${[3, 1, 2, 4]}                    | ${1} | ${0}
    ${2} | ${[3, 4, 1, 2]}                    | ${2} | ${0}
    ${3} | ${[3, 1, 4, 2]}                    | ${2} | ${1}
    ${4} | ${[4, 5, 9, 1, 8, 6, 10, 2, 3, 7]} | ${3} | ${0}
    ${5} | ${[4, 6, 9, 1, 8, 5, 10, 2, 3, 7]} | ${3} | ${1}
    ${6} | ${[4, 6, 9, 1, 8, 5, 10, 3, 2, 7]} | ${3} | ${-1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(isItPossibleToSort(arr, k)).toBe(result);
  });
});
