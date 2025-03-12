const { getCountOfTurnedOverCards } = require('./A');

describe('908A. New Year and Counting Cards', () => {
  it.each`
    n    | num                                        | result
    ${1} | ${'ee'}                                    | ${2}
    ${2} | ${'z'}                                     | ${0}
    ${3} | ${'0ay1'}                                  | ${2}
    ${4} | ${'0abcdefghijklmnopqrstuvwxyz1234567896'} | ${10}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfTurnedOverCards(num)).toBe(result);
  });
});
