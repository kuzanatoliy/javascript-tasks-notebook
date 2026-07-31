const { getOperationsCount } = require('./B');

describe('1993B. Parity and Sum', () => {
  it.each`
    n    | arr                                                         | result
    ${1} | ${[1, 3, 5, 7, 9]}                                          | ${0}
    ${2} | ${[4, 4, 4, 4]}                                             | ${0}
    ${3} | ${[2, 3, 4]}                                                | ${2}
    ${4} | ${[3, 2, 2, 8]}                                             | ${4}
    ${5} | ${[4, 3, 6, 1, 2, 1]}                                       | ${3}
    ${6} | ${[3, 6, 1, 2, 1, 2]}                                       | ${3}
    ${7} | ${[999999996, 999999997, 999999998, 999999999, 1000000000]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCount(arr)).toBe(result);
  });
});
