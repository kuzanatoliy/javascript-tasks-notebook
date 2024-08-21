const { getMaxAmountOfCharacters } = require('./B');

describe('1633B. Minority', () => {
  it.each`
    n    | number             | result
    ${1} | ${'01'}            | ${0}
    ${2} | ${'1010101010111'} | ${5}
    ${3} | ${'00110001000'}   | ${3}
    ${4} | ${'1'}             | ${0}
  `('Base test: $n', ({ number, result }) => {
    expect(getMaxAmountOfCharacters(number)).toBe(result);
  });
});
