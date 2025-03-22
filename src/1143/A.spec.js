const { getMinCount } = require('./A');

describe('1143A. The Doors', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[0, 0, 1, 0, 0]} | ${3}
    ${2} | ${[1, 0, 0, 1]}    | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCount(arr)).toBe(result);
  });
});
