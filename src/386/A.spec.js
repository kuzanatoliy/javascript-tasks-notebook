const { getWinner } = require('./A');

describe('384A. Second-Price Auction', () => {
  it.each`
    n    | array                  | result
    ${1} | ${[5, 7]}              | ${[2, 5]}
    ${2} | ${[10, 2, 8]}          | ${[1, 8]}
    ${3} | ${[3, 8, 2, 9, 4, 14]} | ${[6, 9]}
  `('Base test: $n', ({ array, result }) => {
    expect(getWinner(array)).toStrictEqual(result);
  });
});
