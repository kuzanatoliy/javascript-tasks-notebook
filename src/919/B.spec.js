const { getPerfectInteger } = require('./B');

describe('919B. Perfect Number', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${19}
    ${2} | ${2}   | ${28}
  `('Base test: $n', ({ number, result }) => {
    expect(getPerfectInteger(number)).toBe(result);
  });
});
