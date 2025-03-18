const { isItPossibleToTransfomr } = require('./A');

describe('2078A. Final Verdict', () => {
  it.each`
    n    | arr                                         | k     | result
    ${1} | ${[3]}                                      | ${3}  | ${'YES'}
    ${2} | ${[7, 11, 2, 5]}                            | ${9}  | ${'NO'}
    ${3} | ${[1, 9, 14, 12, 10, 8]}                    | ${9}  | ${'YES'}
    ${4} | ${[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]} | ${10} | ${'YES'}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(isItPossibleToTransfomr(arr, k)).toBe(result);
  });
});
