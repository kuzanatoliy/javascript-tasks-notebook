const { getCardMap } = require('./B');

describe('2145B. Deck of Cards', () => {
  it.each`
    n    | count | queue      | result
    ${1} | ${4}  | ${'01'}    | ${'-++-'}
    ${2} | ${3}  | ${'22'}    | ${'???'}
    ${3} | ${1}  | ${'2'}     | ${'-'}
    ${4} | ${7}  | ${'01201'} | ${'--?+?--'}
  `('Base test: $n', ({ count, queue, result }) => {
    expect(getCardMap(count, queue)).toBe(result);
  });
});
