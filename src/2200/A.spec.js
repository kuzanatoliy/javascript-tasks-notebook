const { getWinner } = require('./A');

describe('2200A. Eating Game', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[10]}         | ${1}
    ${2} | ${[6, 7]}       | ${1}
    ${3} | ${[1, 4, 3, 4]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
