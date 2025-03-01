const { getFinalString } = require('./B');

describe('1654B. Prefix Removals', () => {
  it.each`
    n    | str                                       | result
    ${1} | ${'abcabdc'}                              | ${'abdc'}
    ${2} | ${'a'}                                    | ${'a'}
    ${3} | ${'bbbbbbbbbb'}                           | ${'b'}
    ${4} | ${'codeforces'}                           | ${'deforces'}
    ${5} | ${'cffcfccffccfcffcfccfcffccffcfccf'}     | ${'cf'}
    ${6} | ${'zyzyzwxxyyxxyyzzyzzxxwzxwywxwzxxyzzw'} | ${'xyzzw'}
  `('Base test: $n', ({ str, result }) => {
    expect(getFinalString(str)).toBe(result);
  });
});
