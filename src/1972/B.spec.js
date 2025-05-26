const { isItPossibleToWin } = require('./B');

describe('1972B. Coin Games', () => {
  it.each`
    n    | map        | result
    ${1} | ${'UUDUD'} | ${'YES'}
    ${2} | ${'UDDUD'} | ${'NO'}
    ${3} | ${'UU'}    | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToWin(map)).toBe(result);
  });
});
