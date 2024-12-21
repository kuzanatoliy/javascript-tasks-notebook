const { getWinner } = require('./A');

describe('1842A. Tenzing and Tsondu', () => {
  it.each`
    n    | arrA                               | arrB                                | result
    ${1} | ${[9]}                             | ${[1, 2, 3]}                        | ${'Tsondu'}
    ${2} | ${[1, 2]}                          | ${[1, 1, 1]}                        | ${'Draw'}
    ${3} | ${[1, 2, 3]}                       | ${[1, 1]}                           | ${'Tsondu'}
    ${4} | ${[1, 1, 1]}                       | ${[2, 2, 2]}                        | ${'Tenzing'}
    ${5} | ${[1, 2, 3, 3, 2, 2, 1, 1, 2, 2]}  | ${[3, 3, 3, 3, 2, 1, 1, 1, 1, 1]}   | ${'Draw'}
    ${6} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} | ${[6, 7, 8, 9, 10, 11, 1, 1, 1, 1]} | ${'Draw'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getWinner(arrA, arrB)).toBe(result);
  });
});
