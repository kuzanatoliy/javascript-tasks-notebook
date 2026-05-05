const { isItPossibleToWin } = require('./A');

describe('2217A. The Equalizer', () => {
  it.each`
    n    | k     | arr                                    | result
    ${1} | ${1}  | ${[1]}                                 | ${'YES'}
    ${2} | ${67} | ${[67, 67]}                            | ${'YES'}
    ${3} | ${2}  | ${[3, 3, 3]}                           | ${'YES'}
    ${4} | ${3}  | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} | ${'NO'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(isItPossibleToWin(k, arr)).toBe(result);
  });
});
