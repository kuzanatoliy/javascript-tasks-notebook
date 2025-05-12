const { getMaxRating } = require('./B');

describe('2013B. Battle for Survive', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 1]}          | ${-1}
    ${2} | ${[2, 2, 8]}       | ${8}
    ${3} | ${[1, 2, 4, 3]}    | ${2}
    ${4} | ${[1, 2, 3, 4, 5]} | ${7}
    ${5} | ${[3, 2, 4, 5, 4]} | ${8}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxRating(arr)).toBe(result);
  });
});
