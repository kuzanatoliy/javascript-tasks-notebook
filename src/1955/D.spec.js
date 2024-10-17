const { getCountOfSubarrays } = require('./D');

describe('1955D. Inaccurate Subsequence Search', () => {
  it.each`
    n    | arrA                                  | arrB                | k    | result
    ${1} | ${[4, 1, 2, 3, 4, 5, 6]}              | ${[1, 2, 3, 4]}     | ${2} | ${4}
    ${2} | ${[4, 1, 2, 3, 4, 5, 6]}              | ${[1, 2, 3, 4]}     | ${3} | ${3}
    ${3} | ${[4, 1, 2, 3, 4, 5, 6]}              | ${[1, 2, 3, 4]}     | ${4} | ${2}
    ${4} | ${[9, 9, 2, 2, 10, 9, 7, 6, 3, 6, 3]} | ${[6, 9, 7, 8, 10]} | ${3} | ${4}
    ${5} | ${[4, 1, 5, 6]}                       | ${[6]}              | ${1} | ${1}
  `('Base test: $n', ({ arrA, arrB, k, result }) => {
    expect(getCountOfSubarrays(arrA, arrB, k)).toBe(result);
  });
});
