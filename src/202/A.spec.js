const { getSubStr } = require('./A');

describe('202A. LLPS', () => {
  it.each`
    n    | str             | result
    ${1} | ${'radar'}      | ${'rr'}
    ${2} | ${'bowwowwow'}  | ${'wwwww'}
    ${3} | ${'codeforces'} | ${'s'}
    ${4} | ${'mississipp'} | ${'ssss'}
  `('Base test: $n', ({ str, result }) => {
    expect(getSubStr(str)).toBe(result);
  });
});
