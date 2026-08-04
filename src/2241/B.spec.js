const { getMinLengthAfterTransformation } = require('./B');

describe('2241B. Good times Good times', () => {
  it.each`
    n    | str         | result
    ${1} | ${'0000'}   | ${1}
    ${2} | ${'110'}    | ${2}
    ${3} | ${'110011'} | ${1}
    ${4} | ${'101100'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinLengthAfterTransformation(str)).toBe(result);
  });
});
