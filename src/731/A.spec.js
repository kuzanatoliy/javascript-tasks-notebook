const { getMinNumbersOfRotations } = require('./A');

describe('732A. Night at the Museum', () => {
  it.each`
    n    | string    | result
    ${1} | ${'zeus'} | ${18}
    ${2} | ${'map'}  | ${35}
    ${3} | ${'ares'} | ${34}
  `('Base test: $n', ({ string, result }) => {
    expect(getMinNumbersOfRotations(string)).toBe(result);
  });
});
