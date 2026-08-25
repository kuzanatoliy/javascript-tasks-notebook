const { getPairsCount } = require('./A');

describe('651A. Joysticks', () => {
  it.each`
    n    | a1   | a2   | result
    ${1} | ${3} | ${5} | ${6}
    ${2} | ${4} | ${4} | ${5}
    ${3} | ${1} | ${1} | ${0}
  `('Base test: $n', ({ a1, a2, result }) => {
    expect(getPairsCount(a1, a2)).toBe(result);
  });
});
