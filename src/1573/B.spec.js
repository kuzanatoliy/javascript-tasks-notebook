const { getCountOfOperations } = require('./B');

describe('1573B. Swaps', () => {
  it.each`
    n    | arrA               | arrB                | result
    ${1} | ${[3, 1]}          | ${[4, 2]}           | ${0}
    ${2} | ${[5, 3, 1]}       | ${[2, 4, 6]}        | ${2}
    ${3} | ${[7, 5, 9, 1, 3]} | ${[2, 4, 6, 10, 8]} | ${3}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfOperations(arrA, arrB)).toStrictEqual(result);
  });
});
