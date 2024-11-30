const { getMaxCountOfPiles } = require('./B');

describe('1698B. Rising Sand', () => {
  it.each`
    n    | arr                | k    | result
    ${1} | ${[1, 9, 2, 4, 1]} | ${2} | ${2}
    ${2} | ${[1, 3, 2, 1]}    | ${4} | ${0}
    ${3} | ${[1, 3, 1]}       | ${1} | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxCountOfPiles(arr, k)).toBe(result);
  });
});
