const { isItPossibleToWin } = require('./D');

describe('1355D. Game With Array', () => {
  it.each`
    n    | N    | S    | result
    ${1} | ${1} | ${4} | ${['YES', [4], 1]}
    ${2} | ${3} | ${4} | ${['NO']}
    ${3} | ${3} | ${8} | ${['YES', [2, 2, 4], 1]}
  `('Base test: $n', ({ N, S, result }) => {
    expect(isItPossibleToWin(N, S)).toStrictEqual(result);
  });
});
