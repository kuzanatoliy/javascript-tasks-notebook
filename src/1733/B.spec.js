const { getGameMap } = require('./B');

describe('1733B. Rule of League', () => {
  it.each`
    n    | num  | x    | y    | result
    ${1} | ${5} | ${2} | ${0} | ${[1, 1, 4, 4]}
    ${2} | ${8} | ${1} | ${2} | ${[-1]}
    ${3} | ${3} | ${0} | ${0} | ${[-1]}
    ${4} | ${2} | ${0} | ${1} | ${[1]}
    ${5} | ${6} | ${3} | ${0} | ${[-1]}
    ${6} | ${3} | ${0} | ${1} | ${[1, 3]}
  `('Base test: $n', ({ num, x, y, result }) => {
    expect(getGameMap(num, x, y)).toStrictEqual(result);
  });
});
