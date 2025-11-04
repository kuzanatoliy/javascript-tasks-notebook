const { getTowersAndMaxLength } = require('./A');

describe('37A. Towers', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2, 3]}    | ${[1, 3]}
    ${2} | ${[6, 5, 6, 7]} | ${[2, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getTowersAndMaxLength(arr)).toStrictEqual(result);
  });
});
