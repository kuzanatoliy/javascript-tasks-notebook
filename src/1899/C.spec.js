const { getMaxSubarrSum } = require('./C');

describe('1899A. Game with Integers', () => {
  it.each`
    n    | arr                                                                         | result
    ${1} | ${[1, 2, 3, 4, 5]}                                                          | ${15}
    ${2} | ${[9, 9, 8, 8]}                                                             | ${17}
    ${3} | ${[-1, 4, -1, 0, 5, -4]}                                                    | ${8}
    ${4} | ${[-1, 2, 4, -3]}                                                           | ${4}
    ${5} | ${[-1000]}                                                                  | ${-1000}
    ${6} | ${[101, -99, 101]}                                                          | ${101}
    ${7} | ${[-10, 5, -8, 10, 6, -10, 7, 9, -2, -6, 7, 2, -4, 6, -1, 7, -6, -7, 4, 1]} | ${10}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSubarrSum(arr)).toBe(result);
  });
});
