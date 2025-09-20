const { getMinCountOfOperations } = require('./A');

describe('793A. Oleg and shares', () => {
  it.each`
    n    | array                                      | k    | result
    ${1} | ${[12, 9, 15]}                             | ${3} | ${3}
    ${2} | ${[10, 9]}                                 | ${2} | ${-1}
    ${3} | ${[1, 1000000000, 1000000000, 1000000000]} | ${1} | ${2999999997}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getMinCountOfOperations(array, k)).toBe(result);
  });
});
