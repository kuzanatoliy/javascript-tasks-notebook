const { getMinNumberOfReplacements } = require('./B');

describe('1506B. Partial Replacement', () => {
  it.each`
    n    | distance | x            | result
    ${1} | ${3}     | ${'.**.***'} | ${3}
    ${2} | ${1}     | ${'..*..'}   | ${1}
    ${3} | ${2}     | ${'*.*.*'}   | ${3}
    ${4} | ${2}     | ${'*.*'}     | ${2}
    ${5} | ${1}     | ${'*'}       | ${1}
  `('Base test: $n', ({ distance, x, result }) => {
    expect(getMinNumberOfReplacements(distance, x)).toBe(result);
  });
});
