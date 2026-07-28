const { getScore } = require('./C');

describe('2004C. Splitting Items', () => {
  it.each`
    n    | k    | arr             | result
    ${1} | ${5} | ${[1, 10]}      | ${4}
    ${2} | ${0} | ${[10, 15, 12]} | ${13}
    ${3} | ${6} | ${[3, 1, 2, 4]} | ${0}
    ${4} | ${4} | ${[6, 9]}       | ${0}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getScore(k, arr)).toBe(result);
  });
});
