const { getVolume } = require('./A');

describe('837A. Text Volume', () => {
  it.each`
    n    | text                          | result
    ${1} | ${'NonZERO'}                  | ${5}
    ${2} | ${'this is zero answer text'} | ${0}
    ${3} | ${'Harbour Space University'} | ${1}
  `('Base test: $n', ({ text, result }) => {
    expect(getVolume(text)).toBe(result);
  });
});
