const { getCountOfString } = require('./A');

describe('1634A. Reverse and Concatenate', () => {
  it.each`
    n    | count | string       | result
    ${1} | ${2}  | ${'aab'}     | ${2}
    ${2} | ${3}  | ${'aab'}     | ${2}
    ${3} | ${1}  | ${'abacaba'} | ${1}
    ${4} | ${0}  | ${'ab'}      | ${1}
  `('Base test: $n', ({ count, string, result }) => {
    expect(getCountOfString(count, string)).toBe(result);
  });
});
