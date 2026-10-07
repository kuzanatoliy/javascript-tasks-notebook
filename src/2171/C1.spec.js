const { getWinner } = require('./C1');

describe('2171A. Shizuku Hoshikawa and Farm Legs', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[1, 0, 0, 1]}       | ${[1, 0, 1, 1]}       | ${'Ajisai'}
    ${2} | ${[0, 1, 1, 1, 1, 0]} | ${[0, 0, 1, 0, 1, 1]} | ${'Mai'}
    ${3} | ${[0, 0, 1, 0]}       | ${[1, 0, 1, 1]}       | ${'Tie'}
    ${4} | ${[1, 0, 1, 1, 1]}    | ${[0, 1, 1, 1, 0]}    | ${'Ajisai'}
    ${5} | ${[1, 1, 1, 1, 1, 1]} | ${[1, 1, 1, 1, 1, 1]} | ${'Tie'}
    ${6} | ${[0, 1, 0, 0, 1]}    | ${[1, 0, 0, 1, 1]}    | ${'Mai'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getWinner(arrA, arrB)).toStrictEqual(result);
  });
});
