const { getAnswers } = require('./B');

describe('1080B. Margarite and the best present', () => {
  it.each`
    n    | queries                                     | result
    ${1} | ${[[1, 3], [2, 5], [5, 5], [4, 4], [2, 3]]} | ${[-2, -2, -5, 4, -1]}
  `('Base test: $n', ({ queries, result }) => {
    expect(getAnswers(queries)).toStrictEqual(result);
  });
});
