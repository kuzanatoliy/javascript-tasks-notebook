const { getSendwichsCount } = require('./A');

describe('2276A. Perfect Sandwiches', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${6} | ${4} | ${2}
    ${2} | ${5} | ${1} | ${1}
    ${3} | ${4} | ${5} | ${-1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getSendwichsCount(a, b)).toBe(result);
  });
});
