const { getMaxHapiness } = require('./C');

describe('1369C. RationalLee', () => {
  it.each`
    n    | numbers                                             | friends         | result
    ${1} | ${[1, 13, 7, 17]}                                   | ${[1, 3]}       | ${48}
    ${2} | ${[10, 10, 10, 10, 11, 11]}                         | ${[3, 3]}       | ${42}
    ${3} | ${[1000000000, 1000000000, 1000000000, 1000000000]} | ${[1, 1, 1, 1]} | ${8000000000}
  `('Base test: $n', ({ numbers, friends, result }) => {
    expect(getMaxHapiness(numbers, friends)).toBe(result);
  });
});
