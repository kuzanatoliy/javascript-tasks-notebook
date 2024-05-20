const { getCountOfPairs } = require('./D');

describe('1520D. Same Differences', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[3, 5, 1, 4, 6, 6]} | ${1}
    ${2} | ${[1, 2, 3]}          | ${3}
    ${3} | ${[1, 3, 3, 4]}       | ${3}
    ${4} | ${[1, 6, 3, 4, 5, 6]} | ${10}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfPairs(array)).toBe(result);
  });
});
