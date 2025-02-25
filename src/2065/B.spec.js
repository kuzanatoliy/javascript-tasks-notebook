const { getMinAchivableStr } = require('./B');

describe('2065B. Skibidus and Ohio', () => {
  it.each`
    n    | str           | result
    ${1} | ${'baa'}      | ${1}
    ${2} | ${'skibidus'} | ${8}
    ${3} | ${'cc'}       | ${1}
    ${4} | ${'ohio'}     | ${4}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinAchivableStr(str)).toBe(result);
  });
});
