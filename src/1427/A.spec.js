const { isItPossibleToTransformArray } = require('./A');

describe('1427A. Avoiding Zero', () => {
  it.each`
    n    | arr                          | result
    ${1} | ${[1, -2, 3, -4]}            | ${['YES', [-4, -2, 1, 3]]}
    ${2} | ${[0, 0, 0]}                 | ${['NO']}
    ${3} | ${[1, -1, 1, -1, 1]}         | ${['YES', [1, 1, 1, -1, -1]]}
    ${4} | ${[40, -31, -9, 0, 13, -40]} | ${['YES', [-40, -31, -9, 0, 13, 40]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransformArray(arr)).toStrictEqual(result);
  });
});
