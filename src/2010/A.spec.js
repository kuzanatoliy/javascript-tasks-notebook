const { getAlternatingSum } = require('./A');

describe('2010B. Three Brothers', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3, 17]}   | ${-15}
    ${2} | ${[100]}           | ${100}
    ${3} | ${[100, 100]}      | ${0}
    ${4} | ${[3, 1, 4, 1, 5]} | ${10}
  `('Base test: $n', ({ arr, result }) => {
    expect(getAlternatingSum(arr)).toBe(result);
  });
});
