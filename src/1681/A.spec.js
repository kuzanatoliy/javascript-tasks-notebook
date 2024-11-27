const { getWinner } = require('./A');

describe('1681A. Game with Cards', () => {
  it.each`
    n    | arrN                               | arrM        | result
    ${1} | ${[6]}                             | ${[6, 8]}   | ${['Bob', 'Bob']}
    ${2} | ${[1, 3, 3, 7]}                    | ${[4, 2]}   | ${['Alice', 'Alice']}
    ${3} | ${[50]}                            | ${[25, 50]} | ${['Alice', 'Bob']}
    ${4} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} | ${[5, 15]}  | ${['Bob', 'Bob']}
  `('Base test: $n', ({ arrN, arrM, result }) => {
    expect(getWinner(arrN, arrM)).toStrictEqual(result);
  });
});
