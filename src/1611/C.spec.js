const { isItPossibleToTransform } = require('./C');

describe('1611C. Polycarp Recovers the Permutation', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 2, 4]}    | ${[4, 2, 3, 1]}
    ${2} | ${[1]}             | ${[1]}
    ${3} | ${[1, 3, 5, 4, 2]} | ${[-1]}
    ${4} | ${[3, 2, 1]}       | ${[1, 2, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toStrictEqual(result);
  });
});
