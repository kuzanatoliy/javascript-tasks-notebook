const { transformString } = require('./A');

describe('1606A. AB Balance', () => {
  it.each`
    n    | str            | result
    ${1} | ${'b'}         | ${'b'}
    ${2} | ${'aabbbabaa'} | ${'aabbbabaa'}
    ${3} | ${'abbb'}      | ${'abba'}
    ${4} | ${'abbaab'}    | ${'abbaaa'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
