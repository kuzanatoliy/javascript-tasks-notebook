const { getCountsOfBooks } = require('./B');

describe('1073B. Vasya and Books', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[1, 2, 3]}          | ${[2, 1, 3]}          | ${[2, 0, 1]}
    ${2} | ${[3, 1, 4, 2, 5]}    | ${[4, 5, 1, 3, 2]}    | ${[3, 2, 0, 0, 0]}
    ${3} | ${[6, 5, 4, 3, 2, 1]} | ${[6, 5, 3, 4, 2, 1]} | ${[1, 1, 2, 0, 1, 1]}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountsOfBooks(arrA, arrB)).toStrictEqual(result);
  });
});
