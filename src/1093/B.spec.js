const { getGoodStr } = require('./B');

describe('1093B. Letters Rearranging', () => {
  it.each`
    n    | str          | result
    ${1} | ${'aa'}      | ${-1}
    ${2} | ${'abacaba'} | ${'aaaabbc'}
    ${3} | ${'xdd'}     | ${'ddx'}
  `('Base test: $n', ({ str, result }) => {
    expect(getGoodStr(str)).toBe(result);
  });
});
