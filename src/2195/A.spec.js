const { isItPossibleToSelect } = require('./A');

describe('2195A. Sieve of Erato67henes', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[1, 7, 6, 7, 67]} | ${'YES'}
    ${2} | ${[1, 3, 5, 7, 8]}  | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSelect(arr)).toBe(result);
  });
});
