const { getCountOfOperations } = require('./A');

describe('1712A. Wonderful Permutation', () => {
  it.each`
    n    | arr             | k    | result
    ${1} | ${[2, 3, 1]}    | ${1} | ${1}
    ${2} | ${[1, 2, 3]}    | ${3} | ${0}
    ${3} | ${[3, 4, 1, 2]} | ${2} | ${2}
    ${4} | ${[1]}          | ${1} | ${0}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
