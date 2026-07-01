const { getMinAmount } = require('./A');

describe('2238A. Another Puzzle from Papyrus', () => {
  it.each`
    n    | c     | arrA                  | arrB                   | result
    ${1} | ${5}  | ${[5, 2, 3]}          | ${[2, 3, 4]}           | ${6}
    ${2} | ${3}  | ${[1, 2, 3]}          | ${[4, 5, 6]}           | ${-1}
    ${3} | ${4}  | ${[4, 5, 2, 3]}       | ${[3, 5, 1, 2]}        | ${3}
    ${4} | ${4}  | ${[2, 4, 5, 3, 6, 8]} | ${[5, 8, 3, 1, 2, 5]}  | ${8}
    ${5} | ${11} | ${[5, 8, 11, 14, 17]} | ${[16, 12, 10, 10, 6]} | ${-1}
    ${6} | ${5}  | ${[20, 14, 20]}       | ${[12, 18, 17]}        | ${12}
  `('Base test: $n', ({ c, arrA, arrB, result }) => {
    expect(getMinAmount(c, arrA, arrB)).toBe(result);
  });
});
