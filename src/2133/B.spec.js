const { getCountOfEmeralds } = require('./B');

describe('2133A. Redstone?', () => {
  it.each`
    n    | arr                                                             | result
    ${1} | ${[1, 2]}                                                       | ${2}
    ${2} | ${[2, 1, 5, 2]}                                                 | ${7}
    ${3} | ${[1000000000, 1000000000, 1000000000, 1000000000, 1000000000]} | ${3000000000}
    ${4} | ${[3, 1, 4, 1, 5, 9]}                                           | ${14}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfEmeralds(arr)).toBe(result);
  });
});
