const { getMaxHappiness } = require('./get-max-hapiness');

describe('getMaxHappiness', () => {
  it.each`
    n    | arr                                         | result
    ${1} | ${[[1, 3], [5, 2], [3, 2]]}                 | ${4}
    ${2} | ${[]}                                       | ${0}
    ${2} | ${[[1, 3], [1, 3], [1, 3], [5, 2], [3, 2]]} | ${9}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxHappiness(arr)).toBe(result);
  });
});
