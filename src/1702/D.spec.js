const { transformString } = require('./D');

describe('1702D. Not a Cheap String', () => {
  it.each`
    n    | str             | weight | result
    ${1} | ${'abca'}       | ${2}   | ${'aa'}
    ${2} | ${'abca'}       | ${6}   | ${'aba'}
    ${3} | ${'codeforces'} | ${1}   | ${''}
    ${4} | ${'codeforces'} | ${10}  | ${'cdc'}
    ${5} | ${'codeforces'} | ${100} | ${'codeforces'}
  `('Base test: $n', ({ str, weight, result }) => {
    expect(transformString(str, weight)).toBe(result);
  });
});
