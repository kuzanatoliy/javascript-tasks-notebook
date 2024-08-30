const { getCountOfMoves } = require('./A');

describe('1855A. Dalton the Teacher', () => {
  it.each`
    n    | array                              | result
    ${1} | ${[2, 1]}                          | ${0}
    ${2} | ${[1, 2, 3]}                       | ${2}
    ${3} | ${[1, 2, 5, 4, 3]}                 | ${2}
    ${4} | ${[1, 2, 4, 3]}                    | ${1}
    ${5} | ${[10, 2, 1, 3, 6, 5, 4, 7, 9, 8]} | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfMoves(array)).toBe(result);
  });
});
