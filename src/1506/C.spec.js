const { getCountOfRemoves } = require('./C');

describe('1506C. Double-ended Strings', () => {
  it.each`
    n    | str1                      | str2                      | result
    ${1} | ${'a'}                    | ${'a'}                    | ${0}
    ${2} | ${'abcd'}                 | ${'bc'}                   | ${2}
    ${3} | ${'hello'}                | ${'codeforces'}           | ${13}
    ${4} | ${'hello'}                | ${'helo'}                 | ${3}
    ${5} | ${'dhjakjsnasjhfksafasd'} | ${'adjsnasjhfksvdafdser'} | ${20}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getCountOfRemoves(str1, str2)).toBe(result);
  });
});
