const { getLanguage } = require('./A');

describe('1281A. Suffix Three', () => {
  it.each`
    n    | str                                          | result
    ${1} | ${'kamusta_po'}                              | ${'FILIPINO'}
    ${2} | ${'genki_desu'}                              | ${'JAPANESE'}
    ${3} | ${'ohayou_gozaimasu'}                        | ${'JAPANESE'}
    ${4} | ${'annyeong_hashimnida'}                     | ${'KOREAN'}
    ${5} | ${'hajime_no_ippo'}                          | ${'FILIPINO'}
    ${6} | ${'bensamu_no_sentou_houhou_ga_okama_kenpo'} | ${'FILIPINO'}
    ${7} | ${'ang_halaman_doon_ay_sarisari_singkamasu'} | ${'JAPANESE'}
    ${8} | ${'si_roy_mustang_ay_namamasu'}              | ${'JAPANESE'}
  `('Base test: $n', ({ str, result }) => {
    expect(getLanguage(str)).toBe(result);
  });
});
