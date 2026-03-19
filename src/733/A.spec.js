const { getMinJumpAbility } = require('./A');

describe('733A. Grasshopper And the String', () => {
  it.each`
    n    | str                   | result
    ${1} | ${'ABABBBACFEYUKOTT'} | ${4}
    ${2} | ${'AAA'}              | ${1}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getMinJumpAbility(str, k)).toBe(result);
  });
});
