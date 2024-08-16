const { getAnimalsCount } = require('./A');

describe('1996A. Legs', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${1}
    ${2} | ${6}   | ${2}
    ${3} | ${8}   | ${2}
  `('Base test: $n', ({ number, result }) => {
    expect(getAnimalsCount(number)).toBe(result);
  });
});
