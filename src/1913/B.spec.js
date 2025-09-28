const { getCost } = require('./B');

describe('1913B. Swap and Delete', () => {
  it.each`
    n    | str             | result
    ${1} | ${'0'}          | ${1}
    ${2} | ${'011'}        | ${1}
    ${3} | ${'0101110001'} | ${0}
    ${4} | ${'111100'}     | ${4}
  `('Base test: $n', ({ str, result }) => {
    expect(getCost(str)).toBe(result);
  });
});
