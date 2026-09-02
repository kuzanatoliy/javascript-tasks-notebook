const { getWinner } = require('./B');

describe('2257B. Gigantomachy', () => {
  it.each`
    n    | arrA            | arrB       | result
    ${1} | ${[1]}          | ${[1]}     | ${1}
    ${2} | ${[1]}          | ${[2]}     | ${2}
    ${3} | ${[4]}          | ${[4, 1]}  | ${2}
    ${4} | ${[4, 3, 2, 1]} | ${[10, 1]} | ${2}
    ${5} | ${[4, 3, 2, 1]} | ${[6, 5]}  | ${1}
    ${6} | ${[4, 3, 2, 1]} | ${[7, 5]}  | ${2}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getWinner(arrA, arrB)).toBe(result);
  });
});
