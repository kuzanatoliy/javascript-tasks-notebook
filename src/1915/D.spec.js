const { splitBySyllables } = require('./D');

describe('1915D. Unnatural Language Processing', () => {
  it.each`
    n    | str                         | result
    ${1} | ${'bacedbab'}               | ${'ba.ced.bab'}
    ${2} | ${'baba'}                   | ${'ba.ba'}
    ${3} | ${'daddecabeddad'}          | ${'dad.de.ca.bed.dad'}
    ${4} | ${'dac'}                    | ${'dac'}
    ${5} | ${'dacdac'}                 | ${'dac.dac'}
    ${6} | ${'dababbabababbabbababba'} | ${'da.bab.ba.ba.bab.bab.ba.bab.ba'}
  `('Base test: $n', ({ str, result }) => {
    expect(splitBySyllables(str)).toBe(result);
  });
});
