const { getMaxValue } = require('./A');

describe('276A. Lunch Rush', () => {
  it.each`
    n    | rooms                               | k    | result
    ${1} | ${[[3, 3], [4, 5]]}                 | ${5} | ${4}
    ${2} | ${[[5, 8], [3, 6], [2, 3], [2, 2]]} | ${6} | ${3}
    ${3} | ${[[1, 7]]}                         | ${5} | ${-1}
  `('Base test: $n', ({ rooms, k, result }) => {
    expect(getMaxValue(rooms, k)).toBe(result);
  });
});
