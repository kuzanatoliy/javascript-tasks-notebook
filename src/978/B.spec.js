const { getCountOfRemovedSymbols } = require('./B');

describe('996B. File Name', () => {
  it.each`
    n    | string          | result
    ${1} | ${'xxxiii'}     | ${1}
    ${2} | ${'xxoxx'}      | ${0}
    ${2} | ${'xxxxxxxxxx'} | ${8}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfRemovedSymbols(string)).toBe(result);
  });
});
