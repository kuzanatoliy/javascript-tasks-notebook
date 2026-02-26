const { isItPossibleToWin } = require('./A');

describe('1221A. 2048 Game', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[1024, 512, 64, 512]}                    | ${'YES'}
    ${2} | ${[2048]}                                  | ${'YES'}
    ${3} | ${[64, 512, 2]}                            | ${'NO'}
    ${4} | ${[4096, 4]}                               | ${'NO'}
    ${5} | ${[2048, 2, 2048, 2048, 2048, 2048, 2048]} | ${'YES'}
    ${6} | ${[2048, 4096]}                            | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToWin(arr)).toBe(result);
  });
});
