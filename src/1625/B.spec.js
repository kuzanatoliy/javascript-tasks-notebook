const { getOriginNumber } = require('./B');

describe('1625B. Elementary Particles', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[3, 1, 5, 2, 1, 3, 4]} | ${4}
    ${2} | ${[1, 1, 1, 1, 1, 1]}    | ${5}
    ${3} | ${[1, 4, 2, 8, 5, 7]}    | ${-1}
    ${4} | ${[15, 15]}              | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOriginNumber(arr)).toBe(result);
  });
});
