const { getCountOfOperations } = require('./A');

describe('1846A. Rudolph and Cut the Rope', () => {
  it.each`
    n    | nails                                          | result
    ${1} | ${[[4, 3], [3, 1], [1, 2]]}                    | ${2}
    ${2} | ${[[9, 2], [5, 2], [7, 7], [3, 4]]}            | ${2}
    ${3} | ${[[11, 7], [5, 10], [12, 9], [3, 2], [1, 5]]} | ${3}
    ${4} | ${[[5, 6], [4, 5], [7, 7]]}                    | ${0}
  `('Base test: $n', ({ nails, result }) => {
    expect(getCountOfOperations(nails)).toBe(result);
  });
});
