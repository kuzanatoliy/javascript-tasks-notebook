const { getMinCountOfDays } = require('./B');

describe('1702B. Polycarp Writes a String from Memory', () => {
  it.each`
    n    | str              | result
    ${1} | ${'lollipops'}   | ${2}
    ${2} | ${'stringology'} | ${4}
    ${3} | ${'abracadabra'} | ${3}
    ${4} | ${'codeforces'}  | ${4}
    ${5} | ${'test'}        | ${1}
    ${6} | ${'f'}           | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinCountOfDays(str)).toBe(result);
  });
});
