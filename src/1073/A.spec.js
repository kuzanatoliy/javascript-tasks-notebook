const { hasDiverseSubstr } = require('./A');

describe('1073A. Diverse Substring', () => {
  it.each`
    n    | str             | result
    ${1} | ${'codeforces'} | ${['YES', 'co']}
    ${2} | ${'aaaaa'}      | ${['NO']}
  `('Base test: $n', ({ str, result }) => {
    expect(hasDiverseSubstr(str)).toStrictEqual(result);
  });
});
