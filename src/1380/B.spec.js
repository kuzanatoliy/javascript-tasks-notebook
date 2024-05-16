const { getBetterCombination } = require('./B');

describe('1380B. Universal Solution', () => {
  it.each`
    n    | string    | result
    ${1} | ${'RRRR'} | ${'PPPP'}
    ${2} | ${'RSP'}  | ${'RRR'}
    ${3} | ${'S'}    | ${'R'}
    ${4} | ${'SP'}   | ${'RR'}
  `('Base test: $n', ({ string, result }) => {
    expect(getBetterCombination(string)).toBe(result);
  });
});
