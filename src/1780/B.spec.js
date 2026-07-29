const { getMaxGCD } = require('./B');

describe('1780B. GCD Partition', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[2, 2, 1, 3]}                            | ${4}
    ${2} | ${[1, 2]}                                  | ${1}
    ${3} | ${[1, 4, 5]}                               | ${5}
    ${4} | ${[1, 2, 1, 1, 1, 3]}                      | ${3}
    ${5} | ${[12, 30, 37, 88, 12, 78, 89, 17, 2, 12]} | ${1}
    ${6} | ${[7, 7, 7, 7, 7, 7]}                      | ${21}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxGCD(arr)).toBe(result);
  });
});
