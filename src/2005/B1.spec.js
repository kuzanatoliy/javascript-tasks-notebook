const { getCountOfMoves } = require('./B1');

describe('2005B1. The Strict Teacher (Easy Version)', () => {
  it.each`
    n    | num   | ms        | q    | result
    ${1} | ${10} | ${[1, 4]} | ${2} | ${1}
    ${2} | ${8}  | ${[3, 6]} | ${1} | ${2}
    ${3} | ${8}  | ${[3, 6]} | ${8} | ${2}
  `('Base test: $n', ({ num, ms, q, result }) => {
    expect(getCountOfMoves(num, ms, q)).toBe(result);
  });
});
