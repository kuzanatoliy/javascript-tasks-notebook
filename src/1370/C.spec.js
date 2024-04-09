const { getWinner } = require('./C');

describe('1370C. Number Game', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${'FastestFinger'}
    ${2} | ${2}   | ${'Ashishgup'}
    ${3} | ${3}   | ${'Ashishgup'}
    ${4} | ${4}   | ${'FastestFinger'}
    ${5} | ${5}   | ${'Ashishgup'}
    ${6} | ${6}   | ${'FastestFinger'}
    ${7} | ${12}  | ${'Ashishgup'}
  `('Base test: $n', ({ number, result }) => {
    expect(getWinner(number)).toBe(result);
  });
});
