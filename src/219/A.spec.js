const { getKString } = require('./A');

describe('219A. k-String', () => {
  it.each`
    n    | num  | str            | result
    ${1} | ${2} | ${'aazz'}      | ${'azaz'}
    ${2} | ${3} | ${'abcabcabz'} | ${-1}
  `('Base test: $n', ({ num, str, result }) => {
    expect(getKString(num, str)).toBe(result);
  });
});
