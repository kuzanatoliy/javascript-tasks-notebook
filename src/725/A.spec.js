const { getPositionCount } = require('./A');

describe('725A. Jumping Ball', () => {
  it.each`
    n    | map        | result
    ${1} | ${'<<><'}  | ${2}
    ${2} | ${'>>>>>'} | ${5}
    ${3} | ${'>><<'}  | ${0}
    ${4} | ${'<<>'}   | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getPositionCount(map)).toBe(result);
  });
});
