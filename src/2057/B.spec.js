const { getCountOfOperations } = require('./B');

describe('2057B. Gorilla and the Exam', () => {
  it.each`
    n    | arr                                  | k    | result
    ${1} | ${[48843]}                           | ${0} | ${1}
    ${2} | ${[2, 3, 2]}                         | ${1} | ${1}
    ${3} | ${[1, 2, 3, 4, 5]}                   | ${3} | ${2}
    ${4} | ${[4, 7, 1, 3, 2, 4, 1]}             | ${0} | ${5}
    ${5} | ${[3, 2, 1, 4, 4, 3, 4, 2, 1, 3, 3]} | ${4} | ${2}
    ${6} | ${[1, 2, 3, 4, 5]}                   | ${5} | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
