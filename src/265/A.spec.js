const { getPosition } = require('./A');

describe('265A. Colorful Stones (Simplified Edition)', () => {
  it.each`
    n    | string                                                  | instructions                                            | result
    ${1} | ${'RGB'}                                                | ${'RRR'}                                                | ${2}
    ${2} | ${'RRRBGBRBBB'}                                         | ${'BBBRR'}                                              | ${3}
    ${3} | ${'BRRBGBRGRBGRGRRGGBGBGBRGBRGRGGGRBRRRBRBBBGRRRGGBBB'} | ${'BBRBGGRGRGBBBRBGRBRBBBBRBRRRBGBBGBBRRBBGGRBRRBRGRB'} | ${15}
  `('Base test: $n', ({ string, instructions, result }) => {
    expect(getPosition(string, instructions)).toBe(result);
  });
});
