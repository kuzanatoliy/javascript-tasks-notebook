const { getLength } = require('./A');

describe('954A. Diagonal Walking', () => {
  it.each`
    n    | road                   | result
    ${1} | ${'RUURU'}             | ${3}
    ${2} | ${'UUURRRRRUUURURUUU'} | ${13}
  `('Base test: $n', ({ road, result }) => {
    expect(getLength(road)).toBe(result);
  });
});
