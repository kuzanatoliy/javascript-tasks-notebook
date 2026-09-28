const { getWinner } = require('./A');

describe('43A. Indian Summer', () => {
  it.each`
    n    | goals                            | result
    ${1} | ${['ABC']}                       | ${'ABC'}
    ${2} | ${['A', 'ABA', 'ABA', 'A', 'A']} | ${'A'}
  `('Base test: $n', ({ goals, result }) => {
    expect(getWinner(goals)).toBe(result);
  });
});
