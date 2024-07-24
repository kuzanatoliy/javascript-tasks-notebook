const { getInteger } = require('./C');

describe('1462C. Unique Number', () => {
  it.each`
    n    | string | result
    ${1} | ${1}   | ${1}
    ${2} | ${5}   | ${5}
    ${3} | ${15}  | ${69}
    ${4} | ${50}  | ${-1}
  `('Base test: $n', ({ string, result }) => {
    expect(getInteger(string)).toBe(result);
  });
});
