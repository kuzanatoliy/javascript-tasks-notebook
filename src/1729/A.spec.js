const { getBetterElevator } = require('./A');

describe('1729A. Two Elevators', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${1} | ${2} | ${3} | ${1}
    ${2} | ${3} | ${1} | ${2} | ${3}
    ${3} | ${3} | ${2} | ${1} | ${2}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getBetterElevator(a, b, c)).toBe(result);
  });
});
