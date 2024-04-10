const { getCountOfChanges } = require('./B');

describe('1363A. Odd Selection', () => {
  it.each`
    n    | string      | result
    ${1} | ${'001'}    | ${0}
    ${2} | ${'100'}    | ${0}
    ${3} | ${'101'}    | ${1}
    ${4} | ${'010'}    | ${1}
    ${5} | ${'0'}      | ${0}
    ${6} | ${'1'}      | ${0}
    ${7} | ${'001100'} | ${2}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfChanges(string)).toBe(result);
  });
});
