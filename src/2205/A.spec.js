const { transformPermutation } = require('./A');

describe('2205A. Simons and Making It Beautiful', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2]}                   | ${[2, 1]}
    ${2} | ${[2, 3, 1, 4]}             | ${[4, 3, 1, 2]}
    ${3} | ${[3, 2, 4, 5, 1]}          | ${[5, 2, 4, 3, 1]}
    ${4} | ${[1]}                      | ${[1]}
    ${5} | ${[4, 1, 3, 2, 6, 7, 8, 5]} | ${[8, 1, 3, 2, 6, 7, 4, 5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformPermutation(arr)).toStrictEqual(result);
  });
});
