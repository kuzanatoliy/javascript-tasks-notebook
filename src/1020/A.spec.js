const { getCountOfSteps } = require('./A');

describe('1020B. Badge', () => {
  it.each`
    n    | a    | b    | cases                                         | result
    ${1} | ${2} | ${3} | ${[[1, 2, 1, 3], [1, 4, 3, 4], [1, 2, 2, 3]]} | ${[1, 4, 2]}
  `('Base test: $n', ({ a, b, cases, result }) => {
    expect(getCountOfSteps(a, b, cases)).toStrictEqual(result);
  });
});
