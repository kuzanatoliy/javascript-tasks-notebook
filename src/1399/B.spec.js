const { getMinCountOfMoves } = require('./B');

describe('1399B. Gifts Fixing', () => {
  it.each`
    n    | arrayA                                                             | arrayB                | result
    ${1} | ${[3, 5, 6]}                                                       | ${[3, 2, 3]}          | ${6}
    ${2} | ${[1, 2, 3, 4, 5]}                                                 | ${[5, 4, 3, 2, 1]}    | ${16}
    ${3} | ${[1, 1, 1]}                                                       | ${[2, 2, 2]}          | ${0}
    ${4} | ${[1, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]} | ${[1, 1, 1, 1, 1, 1]} | ${4999999995}
    ${5} | ${[10, 12, 8]}                                                     | ${[7, 5, 4]}          | ${7}
  `('Base test: $n', ({ arrayA, arrayB, result }) => {
    expect(getMinCountOfMoves(arrayA, arrayB)).toBe(result);
  });
});
