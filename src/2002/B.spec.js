const { getWinner } = require('./B');

describe('2002B. Removals Game', () => {
  it.each`
    n    | arrA         | arrB         | result
    ${1} | ${[1, 2]}    | ${[1, 2]}    | ${'Bob'}
    ${2} | ${[1, 2, 3]} | ${[2, 3, 1]} | ${'Alice'}
  `('Base test: $n', ({ arrA, arrB, k, result }) => {
    expect(getWinner(arrA, arrB, k)).toBe(result);
  });
});
