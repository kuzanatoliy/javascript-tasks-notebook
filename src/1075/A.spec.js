const { getWinner } = require('./A');

describe("1075A. The King's Race", () => {
  it.each`
    n    | num  | x    | y    | result
    ${1} | ${4} | ${2} | ${3} | ${'White'}
    ${2} | ${5} | ${3} | ${5} | ${'Black'}
    ${3} | ${2} | ${2} | ${2} | ${'Black'}
  `('Base test: $n', ({ num, x, y, result }) => {
    expect(getWinner(num, x, y)).toBe(result);
  });
});
