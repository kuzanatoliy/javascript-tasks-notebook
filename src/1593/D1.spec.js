const { getMaxNumber } = require('./D1');

describe('1593D1. All are Same', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 5, 3, 1, 1, 5]}          | ${2}
    ${2} | ${[-1, 0, 1, -1, 0, 1, -1, 0]} | ${1}
    ${3} | ${[100, -1000, -1000, -1000]}  | ${1100}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxNumber(arr)).toBe(result);
  });
});
