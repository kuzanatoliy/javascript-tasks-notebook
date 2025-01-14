const { getWinner } = require('./A');

describe('1894A. Secret Sport', () => {
  it.each`
    n    | map                       | result
    ${1} | ${'ABBAA'}                | ${'A'}
    ${2} | ${'BBB'}                  | ${'B'}
    ${3} | ${'BBAAABA'}              | ${'A'}
    ${4} | ${'AAAAAAAABBBAABBBBBAB'} | ${'B'}
    ${5} | ${'A'}                    | ${'A'}
    ${6} | ${'AAAABABBABBAB'}        | ${'B'}
    ${7} | ${'BBBAAAA'}              | ${'A'}
  `('Base test: $n', ({ map, result }) => {
    expect(getWinner(map)).toBe(result);
  });
});
