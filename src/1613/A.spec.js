const { compareNumbers } = require('./A');

describe('1613A. Long Comparison', () => {
  it.each`
    n    | num1         | num2        | result
    ${1} | ${[2, 1]}    | ${[19, 0]}  | ${'>'}
    ${2} | ${[10, 2]}   | ${[100, 1]} | ${'='}
    ${3} | ${[1999, 0]} | ${[2, 3]}   | ${'<'}
    ${4} | ${[1, 0]}    | ${[1, 0]}   | ${'='}
    ${5} | ${[99, 0]}   | ${[1, 2]}   | ${'<'}
  `('Base test: $n', ({ num1, num2, result }) => {
    expect(compareNumbers(num1, num2)).toBe(result);
  });
});
