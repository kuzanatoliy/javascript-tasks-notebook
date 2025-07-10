const { getMexWord } = require('./A');

describe('1737A. Ela Sorting Books', () => {
  it.each`
    n    | str                            | k     | result
    ${1} | ${'cabccadabaac'}              | ${3}  | ${'edb'}
    ${2} | ${'cabccadabaac'}              | ${6}  | ${'ccbbba'}
    ${3} | ${'cabccadabaac'}              | ${12} | ${'bbbbbaaaaaaa'}
    ${4} | ${'abcdefghijklmnopqrstuvwxy'} | ${1}  | ${'z'}
    ${5} | ${'bcdxedbcfg'}                | ${5}  | ${'aaaaa'}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getMexWord(str, k)).toBe(result);
  });
});
