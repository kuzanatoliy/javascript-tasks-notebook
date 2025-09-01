const { getString } = require('./A');

describe('2132A. Homework', () => {
  it.each`
    n    | strA     | strB         | map          | result
    ${1} | ${'ot'}  | ${'ad'}      | ${'DV'}      | ${'dota'}
    ${2} | ${'efo'} | ${'rdcoecs'} | ${'DVDVDVD'} | ${'codeforces'}
    ${3} | ${'aca'} | ${'bbaa'}    | ${'DVDV'}    | ${'abacaba'}
    ${4} | ${'biz'} | ${'abon'}    | ${'VVDD'}    | ${'babizon'}
  `('Base test: $n', ({ strA, strB, map, result }) => {
    expect(getString(strA, strB, map)).toBe(result);
  });
});
