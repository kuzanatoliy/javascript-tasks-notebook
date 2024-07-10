const { isItPossibleToBuildSquare } = require('./B');

describe('1515B. Phoenix and Puzzle', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${'YES'}
    ${2} | ${4}   | ${'YES'}
    ${3} | ${6}   | ${'NO'}
  `('Base test: $n', ({ number, k, result }) => {
    expect(isItPossibleToBuildSquare(number, k)).toStrictEqual(result);
  });
});
