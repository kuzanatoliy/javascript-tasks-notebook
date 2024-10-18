const { isItPossibleToWin } = require('./A');

describe('1598A. Consecutive Sum Riddle', () => {
  it.each`
    n    | row1        | row2        | result
    ${1} | ${'000'}    | ${'000'}    | ${'YES'}
    ${2} | ${'0011'}   | ${'1100'}   | ${'YES'}
    ${3} | ${'0111'}   | ${'1110'}   | ${'NO'}
    ${4} | ${'010101'} | ${'101010'} | ${'YES'}
  `('Base test: $n', ({ row1, row2, result }) => {
    expect(isItPossibleToWin(row1, row2)).toBe(result);
  });
});
