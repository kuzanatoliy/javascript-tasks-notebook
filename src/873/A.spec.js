const { getMinTime } = require('./A');

describe('873A. Chores', () => {
  it.each`
    n    | k    | x    | arr                          | result
    ${1} | ${2} | ${2} | ${[3, 6, 7, 10]}             | ${13}
    ${2} | ${2} | ${1} | ${[100, 100, 100, 100, 100]} | ${302}
  `('Base test: $n', ({ k, x, arr, result }) => {
    expect(getMinTime(k, x, arr)).toBe(result);
  });
});
