const { getFinalNumbersOfCards } = require('./A2');

describe('1786A2. Alternating Deck (hard version)', () => {
  it.each`
    n    | numbersOfCards | result
    ${1} | ${10}          | ${[3, 2, 2, 3]}
    ${2} | ${6}           | ${[1, 0, 2, 3]}
    ${3} | ${17}          | ${[6, 4, 3, 4]}
    ${4} | ${8}           | ${[2, 1, 2, 3]}
    ${5} | ${1000000}     | ${[250278, 249924, 249722, 250076]}
  `('Base test: $n', ({ numbersOfCards, result }) => {
    expect(getFinalNumbersOfCards(numbersOfCards)).toStrictEqual(result);
  });
});
