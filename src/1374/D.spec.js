const { getMinNumbersOfMoves } = require('./D');

describe('1374D. Zero Remainder Array', () => {
  it.each`
    n    | count | array                                       | result
    ${1} | ${3}  | ${[1, 2, 1, 3]}                             | ${6}
    ${2} | ${6}  | ${[8, 7, 1, 8, 3, 7, 5, 10, 8, 9]}          | ${18}
    ${3} | ${10} | ${[20, 100, 50, 20, 100500]}                | ${0}
    ${4} | ${25} | ${[24, 24, 24, 24, 24, 24, 24, 24, 24, 24]} | ${227}
    ${5} | ${8}  | ${[1, 2, 3, 4, 5, 6, 7, 8]}                 | ${8}
  `('Base test: $n', ({ count, array, result }) => {
    expect(getMinNumbersOfMoves(count, array)).toBe(result);
  });
});
