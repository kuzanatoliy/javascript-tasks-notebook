const { getMaxValueAndCount } = require('./A');

describe('649A. Любимые числа Поликарпа', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[80, 7, 16, 4, 48]} | ${[16, 3]}
    ${2} | ${[21, 5, 3, 33]}     | ${[1, 4]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValueAndCount(arr)).toStrictEqual(result);
  });
});
