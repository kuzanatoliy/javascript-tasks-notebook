const { isItPossibleToReorder } = require('./A');

describe('1632A. ABC', () => {
  it.each`
    n    | string    | result
    ${1} | ${'1'}    | ${'YES'}
    ${2} | ${'10'}   | ${'YES'}
    ${3} | ${'01'}   | ${'YES'}
    ${4} | ${'0101'} | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToReorder(string)).toBe(result);
  });
});
