const { getSubstring } = require('./A');

describe('1367A. Short Substrings', () => {
  it.each`
    n    | string          | result
    ${1} | ${'abbaac'}     | ${'abac'}
    ${2} | ${'ac'}         | ${'ac'}
    ${3} | ${'bccddaaf'}   | ${'bcdaf'}
    ${4} | ${'zzzzzzzzzz'} | ${'zzzzzz'}
  `('Base test: $n', ({ string, result }) => {
    expect(getSubstring(string)).toBe(result);
  });
});
