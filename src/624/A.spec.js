const { getAliveTime } = require('./A');

describe('624A. Save Luke', () => {
  it.each`
    n    | l    | d    | v1   | v2   | result
    ${1} | ${2} | ${6} | ${2} | ${2} | ${1}
    ${2} | ${1} | ${9} | ${1} | ${2} | ${2.6666666666666665}
  `('Base test: $n', ({ l, d, v1, v2, result }) => {
    expect(getAliveTime(l, d, v1, v2)).toBe(result);
  });
});
