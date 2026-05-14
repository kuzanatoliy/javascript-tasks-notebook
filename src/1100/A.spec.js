const { getMaxAmount } = require('./A');

describe('1100A. Roman and Browser', () => {
  it.each`
    n    | k    | arr                                                    | result
    ${1} | ${2} | ${[1, 1, -1, 1]}                                       | ${2}
    ${2} | ${3} | ${[-1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1]} | ${9}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getMaxAmount(k, arr)).toBe(result);
  });
});
