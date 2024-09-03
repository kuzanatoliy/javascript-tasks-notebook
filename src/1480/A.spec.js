const { transformString } = require('./A');

describe('1480A. Yet Another String Game', () => {
  it.each`
    n    | str       | result
    ${1} | ${'a'}    | ${'b'}
    ${2} | ${'bbbb'} | ${'azaz'}
    ${3} | ${'az'}   | ${'by'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
