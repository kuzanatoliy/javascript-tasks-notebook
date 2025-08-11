const { getCountOfChanges } = require('./B');

describe('991B. Getting an A', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[4, 4, 4, 4]} | ${2}
    ${2} | ${[5, 4, 5, 5]} | ${0}
    ${3} | ${[5, 3, 3, 5]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfChanges(arr)).toBe(result);
  });
});
