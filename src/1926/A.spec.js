const { getDominantLetter } = require('./A');

describe('1926A. Vlad and the Best of Five', () => {
  it.each`
    n    | string     | result
    ${1} | ${'ABABB'} | ${'B'}
    ${2} | ${'ABABA'} | ${'A'}
    ${3} | ${'BBBAB'} | ${'B'}
    ${4} | ${'AAAAA'} | ${'A'}
    ${5} | ${'BBBBB'} | ${'B'}
    ${6} | ${'BABAA'} | ${'A'}
    ${7} | ${'AAAAB'} | ${'A'}
    ${8} | ${'BAAAA'} | ${'A'}
  `('Base test: $n', ({ string, result }) => {
    expect(getDominantLetter(string)).toBe(result);
  });
});
