const { isItPossibleToPlayCard } = require('./A');

describe('1097A. In Search of an Easy Problem', () => {
  it.each`
    n    | card    | cards                             | result
    ${1} | ${'AS'} | ${['2H', '4C', 'TH', 'JH', 'AD']} | ${'YES'}
    ${2} | ${'2H'} | ${['3D', '4C', 'AC', 'KD', 'AS']} | ${'NO'}
    ${3} | ${'4D'} | ${['AS', 'AC', 'AD', 'AH', '5H']} | ${'YES'}
  `('Base test: $n', ({ card, cards, result }) => {
    expect(isItPossibleToPlayCard(card, cards)).toBe(result);
  });
});
