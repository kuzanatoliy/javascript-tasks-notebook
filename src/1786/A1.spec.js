const { getFinalNumbersOfCards } = require('./A1');

describe('1786A1. Non-alternating Deck (easy version)', () => {
  it.each`
    n    | numbersOfCards | result
    ${1} | ${10}          | ${[5, 5]}
    ${2} | ${6}           | ${[1, 5]}
    ${3} | ${17}          | ${[10, 7]}
    ${4} | ${8}           | ${[3, 5]}
    ${5} | ${1000000}     | ${[500202, 499798]}
  `('Base test: $n', ({ numbersOfCards, result }) => {
    expect(getFinalNumbersOfCards(numbersOfCards)).toStrictEqual(result);
  });
});
