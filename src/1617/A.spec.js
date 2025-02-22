const { getSmalestLStr } = require('./A');

describe('1617A. Forbidden Subsequence', () => {
  it.each`
    n    | str1              | str2     | result
    ${1} | ${'abacaba'}      | ${'abc'} | ${'aaaacbb'}
    ${2} | ${'cccba'}        | ${'acb'} | ${'abccc'}
    ${3} | ${'dbsic'}        | ${'bac'} | ${'bcdis'}
    ${4} | ${'abracadabra'}  | ${'abc'} | ${'aaaaacbbdrr'}
    ${5} | ${'dddddddddddd'} | ${'cba'} | ${'dddddddddddd'}
    ${6} | ${'bbc'}          | ${'abc'} | ${'bbc'}
    ${7} | ${'ac'}           | ${'abc'} | ${'ac'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getSmalestLStr(str1, str2)).toBe(result);
  });
});
