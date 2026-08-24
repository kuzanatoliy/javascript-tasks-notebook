const { isSameStrings } = require('./D');

describe('2094D. Tung Tung Sahur', () => {
  it.each`
    n    | str1           | str2               | result
    ${1} | ${'R'}         | ${'RR'}            | ${'YES'}
    ${2} | ${'LRLR'}      | ${'LRLR'}          | ${'YES'}
    ${3} | ${'LR'}        | ${'LLLR'}          | ${'NO'}
    ${4} | ${'LLLLLRL'}   | ${'LLLLRRLL'}      | ${'NO'}
    ${5} | ${'LLRLRLRRL'} | ${'LLLRLRRLLRRRL'} | ${'YES'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isSameStrings(str1, str2)).toStrictEqual(result);
  });
});
