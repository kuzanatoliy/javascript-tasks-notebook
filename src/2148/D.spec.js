const { getMaxSum } = require('./D');

describe('2148D. Destruction of the Dandelion Fields', () => {
  it.each`
    n    | arr                                               | result
    ${1} | ${[2, 4, 6]}                                      | ${0}
    ${2} | ${[4, 2, 1, 6]}                                   | ${13}
    ${3} | ${[1000000000, 999999999, 1000000000, 999999999]} | ${2999999999}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSum(arr)).toBe(result);
  });
});
