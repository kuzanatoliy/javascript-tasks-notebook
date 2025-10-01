const { getOriginalString } = require('./A');

describe('1474A. Puzzle From the Future', () => {
  it.each`
    n    | str         | result
    ${1} | ${'1'}      | ${'1'}
    ${2} | ${'011'}    | ${'110'}
    ${3} | ${'110'}    | ${'100'}
    ${4} | ${'111000'} | ${'101101'}
    ${5} | ${'001011'} | ${'101110'}
  `('Base test: $n', ({ str, result }) => {
    expect(getOriginalString(str)).toBe(result);
  });
});
