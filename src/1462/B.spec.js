const { isItPossibleToGetYear } = require('./B');

describe("1462B. Last Year's Substring", () => {
  it.each`
    n    | string        | result
    ${1} | ${'20192020'} | ${'YES'}
    ${2} | ${'22019020'} | ${'YES'}
    ${3} | ${'2020'}     | ${'YES'}
    ${4} | ${'20002'}    | ${'NO'}
    ${5} | ${'729040'}   | ${'NO'}
    ${6} | ${'200200'}   | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToGetYear(string)).toBe(result);
  });
});
