const { getReorderedString } = require('./A');

describe('1626A. Equidistant Letters', () => {
  it.each`
    n    | array        | result
    ${1} | ${'oelhl'}   | ${'ehllo'}
    ${2} | ${'abcdcba'} | ${'aabbccd'}
    ${3} | ${'ac'}      | ${'ac'}
  `('Base test: $n', ({ array, result }) => {
    expect(getReorderedString(array)).toBe(result);
  });
});
