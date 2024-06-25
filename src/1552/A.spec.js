const { getCountOfPermutes } = require('./A');

describe('1552A. Dislike of Threes', () => {
  it.each`
    n    | string          | result
    ${1} | ${'lol'}        | ${2}
    ${2} | ${'codeforces'} | ${6}
    ${3} | ${'aaaaa'}      | ${0}
    ${4} | ${'dcba'}       | ${4}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfPermutes(string)).toBe(result);
  });
});
