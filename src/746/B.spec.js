const { decodeStr } = require('./B');

describe('746B. Decoding', () => {
  it.each`
    n    | str        | result
    ${1} | ${'logva'} | ${'volga'}
    ${2} | ${'no'}    | ${'no'}
    ${3} | ${'abba'}  | ${'baba'}
  `('Base test: $n', ({ str, result }) => {
    expect(decodeStr(str)).toBe(result);
  });
});
