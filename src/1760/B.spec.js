const { getCountOfSymbols } = require('./B');

describe("1760B. Atilla's Favorite Problem", () => {
  it.each`
    n    | string          | result
    ${1} | ${'a'}          | ${1}
    ${2} | ${'down'}       | ${23}
    ${3} | ${'codeforces'} | ${19}
    ${4} | ${'bcf'}        | ${6}
    ${5} | ${'zzzzz'}      | ${26}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfSymbols(string)).toBe(result);
  });
});
