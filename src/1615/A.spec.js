const { getMinUgliness } = require('./A');

describe('1615A. Closing The Gap', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[10, 10, 10]}    | ${0}
    ${2} | ${[3, 2, 1, 2]}    | ${0}
    ${3} | ${[1, 2, 3, 1, 5]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinUgliness(arr)).toBe(result);
  });
});
