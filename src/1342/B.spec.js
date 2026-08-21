const { transformString } = require('./B');

describe('1342B. Binary Period', () => {
  it.each`
    n    | str      | result
    ${1} | ${'00'}  | ${'00'}
    ${2} | ${'01'}  | ${'01'}
    ${3} | ${'111'} | ${'111'}
    ${4} | ${'110'} | ${'1010'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
