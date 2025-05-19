const { getCountOfSteps } = require('./B');

describe('1705B. Mark the Dust Sweeper', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[2, 0, 0]}          | ${3}
    ${2} | ${[0, 2, 0, 2, 0]}    | ${5}
    ${3} | ${[2, 0, 3, 0, 4, 6]} | ${11}
    ${4} | ${[0, 0, 0, 10]}      | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toBe(result);
  });
});
