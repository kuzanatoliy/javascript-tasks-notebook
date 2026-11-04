const { getWinner } = require('./C');

describe('2271C. I Know About a Million Things', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[7]}                           | ${'Moggity'}
    ${2} | ${[2, 3]}                        | ${'Larpity'}
    ${3} | ${[1000000, 999999, 5, 4, 3, 2]} | ${'Moggity'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
