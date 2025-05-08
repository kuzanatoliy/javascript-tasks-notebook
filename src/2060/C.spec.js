const { getScore } = require('./C');

describe('2060C. Game of Mathletes', () => {
  it.each`
    n    | arr                                                 | k     | result
    ${1} | ${[1, 2, 3, 2]}                                     | ${4}  | ${2}
    ${2} | ${[1, 2, 3, 4, 5, 6, 7, 8]}                         | ${15} | ${1}
    ${3} | ${[1, 1, 1, 1, 1, 1]}                               | ${1}  | ${0}
    ${4} | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3]} | ${9}  | ${4}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getScore(arr, k)).toBe(result);
  });
});
