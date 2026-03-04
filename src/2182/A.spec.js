const { isNewYearStr } = require('./A');

describe('2184A. New Year String', () => {
  it.each`
    n    | str            | result
    ${1} | ${'0000'}      | ${0}
    ${2} | ${'2025'}      | ${1}
    ${3} | ${'2026'}      | ${0}
    ${4} | ${'20252026'}  | ${0}
    ${5} | ${'20252025'}  | ${1}
    ${6} | ${'202520256'} | ${1}
    ${7} | ${'202520265'} | ${0}
  `('Base test: $n', ({ str, result }) => {
    expect(isNewYearStr(str)).toBe(result);
  });
});
