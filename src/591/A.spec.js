const { getDistance } = require('./A');

describe("591A. Wizards' Duel", () => {
  it.each`
    n    | l      | a     | b     | result
    ${1} | ${100} | ${50} | ${50} | ${50}
    ${2} | ${199} | ${60} | ${40} | ${119.4}
  `('Base test: $n', ({ l, a, b, result }) => {
    expect(getDistance(l, a, b)).toBe(result);
  });
});
