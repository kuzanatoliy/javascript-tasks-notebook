const { getMaxPower } = require('./C1');

describe('1800C1. Powering the Hero (easy version)', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[3, 3, 3, 0, 0]}       | ${6}
    ${2} | ${[0, 3, 3, 0, 0, 3]}    | ${6}
    ${3} | ${[1, 2, 3, 0, 4, 5, 0]} | ${8}
    ${4} | ${[1, 2, 5, 0, 4, 3, 0]} | ${9}
    ${5} | ${[3, 1, 0, 0, 4]}       | ${4}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxPower(arr, k)).toBe(result);
  });
});
