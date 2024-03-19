const { getCountOfTurns } = require('./A');

describe('279A. Point on Spiral', () => {
  it.each`
    n    | x     | y     | result
    ${1} | ${0}  | ${0}  | ${0}
    ${2} | ${1}  | ${0}  | ${0}
    ${3} | ${0}  | ${1}  | ${2}
    ${4} | ${-1} | ${-1} | ${3}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfTurns(x, y)).toBe(result);
  });
});
