const { getCountOfOccuredCrimes } = require('./A');

describe('427A. Police Recruits', () => {
  it.each`
    n    | order                                          | result
    ${1} | ${[-1, -1, 1]}                                 | ${2}
    ${2} | ${[1, -1, 1, -1, -1, 1, 1, 1]}                 | ${1}
    ${3} | ${[-1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1]} | ${8}
  `('Base test: $n', ({ order, result }) => {
    expect(getCountOfOccuredCrimes(order)).toBe(result);
  });
});
