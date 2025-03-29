const { getCountOfLocalExtremums } = require('./A');

describe('888A. Local Extrema', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2, 3]}    | ${0}
    ${2} | ${[1, 5, 2, 5]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfLocalExtremums(arr)).toBe(result);
  });
});
