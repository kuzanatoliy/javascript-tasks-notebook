const { getMaxCount } = require('./B');

describe('63B. Petya and Countryside', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[2]}                      | ${1}
    ${2} | ${[1, 2, 1, 2, 1]}          | ${3}
    ${2} | ${[1, 2, 1, 1, 1, 3, 3, 4]} | ${6}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCount(arr)).toBe(result);
  });
});
