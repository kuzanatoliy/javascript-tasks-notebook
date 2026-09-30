const { getWinsCount } = require('./C');

describe('1455A. Strange Functions', () => {
  it.each`
    n    | x    | y    | result
    ${1} | ${1} | ${1} | ${[0, 1]}
    ${2} | ${2} | ${1} | ${[1, 1]}
    ${3} | ${1} | ${7} | ${[0, 7]}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getWinsCount(x, y)).toStrictEqual(result);
  });
});
