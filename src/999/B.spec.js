const { decriptString } = require('./B');

describe('999B. Reversing Encryption', () => {
  it.each`
    n    | str                   | result
    ${1} | ${'rocesfedoc'}       | ${'codeforces'}
    ${2} | ${'plmaetwoxesisiht'} | ${'thisisexampletwo'}
    ${3} | ${'z'}                | ${'z'}
  `('Base test: $n', ({ str, result }) => {
    expect(decriptString(str)).toBe(result);
  });
});
