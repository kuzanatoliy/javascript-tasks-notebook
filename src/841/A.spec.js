const { isItPossibleToSplitBaloons } = require('./A');

describe('841A. Generous Kefa', () => {
  it.each`
    n    | map         | k    | result
    ${1} | ${'aabb'}   | ${2} | ${'YES'}
    ${2} | ${'aacaab'} | ${3} | ${'NO'}
  `('Base test: $n', ({ map, k, result }) => {
    expect(isItPossibleToSplitBaloons(map, k)).toBe(result);
  });
});
