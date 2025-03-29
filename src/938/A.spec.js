const { correctString } = require('./A');

describe('938A. Word Correction', () => {
  it.each`
    n    | str        | result
    ${1} | ${'weird'} | ${'werd'}
    ${2} | ${'word'}  | ${'word'}
    ${3} | ${'aaeaa'} | ${'a'}
  `('Base test: $n', ({ str, result }) => {
    expect(correctString(str)).toBe(result);
  });
});
