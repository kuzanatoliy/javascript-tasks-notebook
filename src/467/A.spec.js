const { checkFreeSpace } = require('./A');

describe('467A. George and Accommodation', () => {
  it.each`
    n    | rooms                           | result
    ${1} | ${[[1, 1], [2, 2], [3, 3]]}     | ${0}
    ${2} | ${[[1, 10], [0, 10], [10, 10]]} | ${2}
  `('Base test: $n', ({ rooms, result }) => {
    expect(checkFreeSpace(rooms)).toBe(result);
  });
});
