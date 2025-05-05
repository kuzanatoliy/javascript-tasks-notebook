const { isItPossibleToTransformArray } = require('./D');

describe('1980D. GCD-sequence', () => {
  it.each`
    n     | arr                               | result
    ${1}  | ${[20, 6, 12, 3, 48, 36]}         | ${'YES'}
    ${2}  | ${[12, 6, 3, 4]}                  | ${'NO'}
    ${3}  | ${[10, 12, 3]}                    | ${'YES'}
    ${4}  | ${[32, 16, 8, 4, 2]}              | ${'NO'}
    ${5}  | ${[100, 50, 2, 10, 20]}           | ${'YES'}
    ${6}  | ${[2, 4, 8, 1]}                   | ${'YES'}
    ${7}  | ${[7, 4, 6, 2, 4, 5, 1, 4, 2, 8]} | ${'NO'}
    ${8}  | ${[5, 9, 6, 8, 5, 9, 2]}          | ${'YES'}
    ${9}  | ${[11, 14, 8, 12, 9, 3]}          | ${'YES'}
    ${10} | ${[5, 7, 3, 10, 6, 3, 12, 6, 3]}  | ${'YES'}
    ${11} | ${[4, 2, 4]}                      | ${'YES'}
    ${12} | ${[1, 6, 11, 12, 6, 12, 3, 6]}    | ${'YES'}
  `('BtasarrBsse test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransformArray(arr)).toBe(result);
  });
});
