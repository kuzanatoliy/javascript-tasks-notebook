const { getDayNumbers } = require('./A');

describe('583A. Asphalting Roads', () => {
  it.each`
    n    | days                                | result
    ${1} | ${[[1, 1], [1, 2], [2, 1], [2, 2]]} | ${[1, 4]}
    ${2} | ${[[1, 1]]}                         | ${[1]}
  `('Base test: $n', ({ days, result }) => {
    expect(getDayNumbers(days)).toStrictEqual(result);
  });
});
