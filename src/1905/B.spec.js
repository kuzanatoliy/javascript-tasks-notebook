const { isItPossibleToConstruct } = require('./B');

describe("1905B. Begginer's Zelda", () => {
  it.each`
    n    | nodes                                                               | result
    ${1} | ${[[1, 2], [1, 3], [3, 4]]}                                         | ${1}
    ${2} | ${[[3, 1], [3, 5], [3, 2], [5, 6], [6, 7], [7, 8], [7, 9], [6, 4]]} | ${3}
    ${3} | ${[[1, 2], [1, 3], [2, 4], [4, 5], [3, 6], [2, 7]]}                 | ${2}
    ${4} | ${[[1, 2], [1, 3], [1, 4], [4, 5], [2, 6]]}                         | ${2}
  `('Base test: $n', ({ nodes, result }) => {
    expect(isItPossibleToConstruct(nodes)).toBe(result);
  });
});
