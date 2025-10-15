const { getWinner } = require('./B');

describe('1373B. 01 Game', () => {
  it.each`
    n    | number    | result
    ${1} | ${'01'}   | ${'DA'}
    ${2} | ${'1111'} | ${'NET'}
    ${3} | ${'0011'} | ${'NET'}
  `('Base test: $n', ({ number, result }) => {
    expect(getWinner(number)).toBe(result);
  });
});
