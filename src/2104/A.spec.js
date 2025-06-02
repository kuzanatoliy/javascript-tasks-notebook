const { isItPossibleToBalanceDecks } = require('./A');

describe('2104A. Three Decks', () => {
  it.each`
    n    | a     | b     | c     | result
    ${1} | ${3}  | ${5}  | ${10} | ${'YES'}
    ${2} | ${12} | ${20} | ${30} | ${'NO'}
    ${3} | ${3}  | ${5}  | ${7}  | ${'YES'}
    ${4} | ${1}  | ${5}  | ${6}  | ${'NO'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(isItPossibleToBalanceDecks(a, b, c)).toBe(result);
  });
});
