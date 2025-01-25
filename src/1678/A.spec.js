const { getCountOfOperations } = require('./A');

describe('1678A. Food for Animals', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${4}
    ${2} | ${[1, 2, 2]} | ${3}
    ${3} | ${[1, 2, 0]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
