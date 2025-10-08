const { getCountOfLockedRooms } = require('./B');

describe('2004A. Make All Equal', () => {
  it.each`
    n    | d1        | d2        | result
    ${1} | ${[1, 2]} | ${[3, 4]} | ${1}
    ${2} | ${[2, 5]} | ${[2, 5]} | ${3}
    ${3} | ${[3, 7]} | ${[6, 7]} | ${2}
    ${4} | ${[4, 5]} | ${[2, 8]} | ${3}
  `('Base test: $n', ({ d1, d2, result }) => {
    expect(getCountOfLockedRooms(d1, d2)).toBe(result);
  });
});
