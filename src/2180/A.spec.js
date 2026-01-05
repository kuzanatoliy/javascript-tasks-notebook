const { getMaxCost } = require('./A');

describe('2180A. Carnival Wheel', () => {
  it.each`
    n    | l      | a    | b    | result
    ${1} | ${5}   | ${3} | ${2} | ${4}
    ${2} | ${2}   | ${0} | ${6} | ${0}
    ${3} | ${8}   | ${2} | ${4} | ${6}
    ${4} | ${100} | ${0} | ${1} | ${99}
  `('Base test: $n', ({ l, a, b, result }) => {
    expect(getMaxCost(l, a, b)).toBe(result);
  });
});
