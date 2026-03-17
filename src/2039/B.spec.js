const { getSubstr } = require('./B');

describe('2039B. Shohag Loves Strings', () => {
  it.each`
    n    | str             | result
    ${1} | ${'dcabaac'}    | ${'dca'}
    ${2} | ${'a'}          | ${-1}
    ${1} | ${'youknowwho'} | ${'you'}
    ${1} | ${'codeforces'} | ${'cod'}
    ${1} | ${'bangladesh'} | ${'ban'}
  `('Base test: $n', ({ str, result }) => {
    expect(getSubstr(str)).toStrictEqual(result);
  });
});
