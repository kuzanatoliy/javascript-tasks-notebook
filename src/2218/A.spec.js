const { getMaxMin } = require('./A');

describe('2218A. The 67th Integer Problem', () => {
  it.each`
    n    | x    | result
    ${1} | ${1} | ${1}
    ${2} | ${3} | ${3}
    ${3} | ${5} | ${5}
  `('Base test: $n', ({ x, result }) => {
    expect(getMaxMin(x)).toBe(result);
  });
});
