const { getWhoWasLate } = require('./B');

describe('2010B. Three Brothers', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${3} | ${1} | ${2}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getWhoWasLate(a, b)).toBe(result);
  });
});
