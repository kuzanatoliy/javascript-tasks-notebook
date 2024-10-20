const { getCountOfProblems } = require('./A');

describe('999A. Mishka and Contest', () => {
  it.each`
    n    | arr                         | k      | result
    ${1} | ${[4, 2, 3, 1, 5, 1, 6, 4]} | ${4}   | ${5}
    ${2} | ${[3, 1, 2, 1, 3]}          | ${2}   | ${0}
    ${3} | ${[12, 34, 55, 43, 21]}     | ${100} | ${5}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfProblems(arr, k)).toBe(result);
  });
});
