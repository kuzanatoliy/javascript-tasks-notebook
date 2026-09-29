const { getMinString } = require('./B');

describe('1616B. Mirror in the String', () => {
  it.each`
    n    | str             | result
    ${1} | ${'codeforces'} | ${'cc'}
    ${2} | ${'cbacbacba'}  | ${'cbaabc'}
    ${3} | ${'aaa'}        | ${'aa'}
    ${4} | ${'bbaa'}       | ${'bb'}
    ${5} | ${'baa'}        | ${'baaaab'}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinString(str)).toBe(result);
  });
});
