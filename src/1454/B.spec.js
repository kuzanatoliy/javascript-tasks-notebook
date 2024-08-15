const { getWinner } = require('./B');

describe('1454B. Unique Bid Auction', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 1]}             | ${-1}
    ${2} | ${[2, 1, 3]}          | ${2}
    ${3} | ${[2, 2, 2, 3]}       | ${4}
    ${4} | ${[1]}                | ${1}
    ${5} | ${[2, 3, 2, 4, 2]}    | ${2}
    ${6} | ${[1, 1, 5, 5, 4, 4]} | ${-1}
  `('Base test: $n', ({ array, result }) => {
    expect(getWinner(array)).toBe(result);
  });
});
