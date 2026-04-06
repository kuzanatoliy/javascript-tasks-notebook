const { getResult } = require('./A');

describe('1181A. Chunga-Changa', () => {
  it.each`
    n    | c1   | c2   | price | result
    ${1} | ${5} | ${4} | ${3}  | ${[3, 1]}
    ${2} | ${6} | ${8} | ${2}  | ${[7, 0]}
  `('Base test: $n', ({ c1, c2, price, result }) => {
    expect(getResult(c1, c2, price)).toStrictEqual(result);
  });
});
