const { getCountOfSteps } = require('./B');

describe('265B. Roadside Trees (Simplified Edition)', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2]}          | ${5}
    ${2} | ${[2, 1, 2, 1, 1]} | ${14}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toBe(result);
  });
});
