const { isItPossibleToCollect } = require('./A');

describe('1986A. Catch the Coin', () => {
  it.each`
    n    | x     | y      | result
    ${1} | ${24} | ${42}  | ${'YES'}
    ${2} | ${-2} | ${-1}  | ${'YES'}
    ${3} | ${-1} | ${-2}  | ${'NO'}
    ${4} | ${0}  | ${-50} | ${'NO'}
    ${5} | ${15} | ${0}   | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossibleToCollect(x, y)).toBe(result);
  });
});
