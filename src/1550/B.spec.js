const { getMaxCountOfPoints } = require('./B');

describe('1550B. Maximum Cost Deletion', () => {
  it.each`
    n    | a     | b     | map         | result
    ${1} | ${2}  | ${0}  | ${'000'}    | ${6}
    ${2} | ${-2} | ${5}  | ${'11001'}  | ${15}
    ${3} | ${1}  | ${-4} | ${'100111'} | ${-2}
  `('Base test: $n', ({ a, b, map, result }) => {
    expect(getMaxCountOfPoints(a, b, map)).toBe(result);
  });
});
