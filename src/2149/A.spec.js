const { getMinCountOfOperations } = require('./A');

describe('2149A. Be Positive', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[-1, 0, 1]}         | ${3}
    ${2} | ${[-1, -1, 0, 1]}     | ${1}
    ${3} | ${[-1, -1, -1, 0, 0]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCountOfOperations(arr)).toBe(result);
  });
});
