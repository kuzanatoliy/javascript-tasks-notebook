const { getCountOfPockets } = require('./A');

describe("1003A. Polycarp's Pockets", () => {
  it.each`
    n    | coins                 | result
    ${1} | ${[1, 2, 4, 3, 3, 2]} | ${2}
    ${2} | ${[100]}              | ${1}
  `('Base test: $n', ({ coins, result }) => {
    expect(getCountOfPockets(coins)).toBe(result);
  });
});
