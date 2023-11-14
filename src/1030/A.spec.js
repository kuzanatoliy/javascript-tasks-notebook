const { checkProblem } = require('./A');

describe('1030A. In Search of an Easy Problem', () => {
  it.each`
    n    | votes        | result
    ${1} | ${[0, 0, 1]} | ${'HARD'}
    ${2} | ${[0]}       | ${'EASY'}
  `('Base test: $n', ({ votes, result }) => {
    expect(checkProblem(votes)).toBe(result);
  });
});
