const { isWinner } = require('./A');

describe('832A. Sasha and Sticks', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${1}  | ${1} | ${'YES'}
    ${1} | ${10} | ${4} | ${'NO'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isWinner(num, k)).toBe(result);
  });
});
