const { getCommonDivisor } = require('./A');

describe('299B. Ksusha the Squirrel', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 2, 4]}       | ${2}
    ${2} | ${[2, 1, 3, 1, 6]} | ${1}
    ${3} | ${[2, 3, 5]}       | ${-1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCommonDivisor(arr)).toBe(result);
  });
});
