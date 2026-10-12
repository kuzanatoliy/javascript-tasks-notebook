const { getPosition } = require('./B');

describe('1481B. New Colony', () => {
  it.each`
    n    | road | p               | result
    ${1} | ${3} | ${[4, 1, 2, 3]} | ${2}
    ${2} | ${7} | ${[1, 8]}       | ${1}
    ${3} | ${5} | ${[4, 1, 2, 3]} | ${-1}
    ${4} | ${1} | ${[5, 3, 1]}    | ${-1}
  `('Base test: $n', ({ road, p, result }) => {
    expect(getPosition(road, p)).toBe(result);
  });
});
