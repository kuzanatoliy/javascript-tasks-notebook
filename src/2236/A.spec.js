const { getMinBoundary } = require('./A');

describe('2236A. Games on the Train', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3]}          | ${3}
    ${2} | ${[2, 6, 4]}       | ${5}
    ${3} | ${[5, 4, 6, 6, 1]} | ${6}
    ${4} | ${[3, 3, 3, 3]}    | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinBoundary(arr)).toBe(result);
  });
});
