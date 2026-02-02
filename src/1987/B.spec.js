const { getCost } = require('./B');

describe('1987B. K-Sort', () => {
  it.each`
    n    | arr                                           | result
    ${1} | ${[1, 7, 9]}                                  | ${0}
    ${2} | ${[2, 1, 4, 7, 6]}                            | ${3}
    ${3} | ${[1, 3, 2, 4]}                               | ${2}
    ${4} | ${[179]}                                      | ${0}
    ${5} | ${[344, 12, 37, 60, 311, 613, 365, 328, 675]} | ${1821}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCost(arr)).toBe(result);
  });
});
