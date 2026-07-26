const { getSortedSymbolMap } = require('./get-sorted-symbol-map');

describe('getSortedSymbolMap', () => {
  it.each`
    n    | str             | result
    ${1} | ${'rrolllbaak'} | ${'obkral'}
  `('Base test: $n', ({ str, result }) => {
    expect(getSortedSymbolMap(str)).toBe(result);
  });
});
