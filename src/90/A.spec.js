const { getTime } = require('./A');

describe('90A. Cableway', () => {
  it.each`
    n    | r    | g    | b    | result
    ${1} | ${1} | ${3} | ${2} | ${34}
    ${2} | ${3} | ${2} | ${1} | ${33}
  `('Base test: $n', ({ r, g, b, result }) => {
    expect(getTime(r, g, b)).toBe(result);
  });
});
