const { isItPossibleToLink } = require('./A');

describe('980A. Links and Pearls', () => {
  it.each`
    n    | arr          | result
    ${1} | ${'-o-o--'}  | ${'YES'}
    ${2} | ${'-o---'}   | ${'YES'}
    ${3} | ${'-o---o-'} | ${'NO'}
    ${4} | ${'ooo'}     | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToLink(arr)).toBe(result);
  });
});
