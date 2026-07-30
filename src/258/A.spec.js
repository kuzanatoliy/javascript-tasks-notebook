const { transform } = require('./A');

describe('258A. Little Elephant and Bits', () => {
  it.each`
    n    | snum        | result
    ${1} | ${'101'}    | ${'11'}
    ${2} | ${'110010'} | ${'11010'}
    ${3} | ${'1111'}   | ${'111'}
  `('Base test: $n', ({ snum, result }) => {
    expect(transform(snum)).toBe(result);
  });
});
