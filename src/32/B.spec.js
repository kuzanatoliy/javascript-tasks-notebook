const { convertBorze } = require('./B');

describe('32B. Borze', () => {
  it.each`
    n    | string       | result
    ${1} | ${'.-.--'}   | ${'012'}
    ${2} | ${'--.'}     | ${'20'}
    ${3} | ${'-..-.--'} | ${'1012'}
  `('Base test: $n', ({ string, result }) => {
    expect(convertBorze(string)).toBe(result);
  });
});
