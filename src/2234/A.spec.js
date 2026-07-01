const { isItPossibleToTransform } = require('./A');

describe('2234A. Euclid, Sequence and Two arrbers', () => {
  it.each`
    n    | arr              | result
    ${1} | ${[1, 1]}        | ${[1, 1]}
    ${2} | ${[1, 2]}        | ${[2, 1]}
    ${3} | ${[1, 2, 3, 4]}  | ${[-1]}
    ${4} | ${[6, 4, 2]}     | ${[6, 4]}
    ${5} | ${[3, 8, 13, 5]} | ${[13, 8]}
    ${6} | ${[1, 1, 1]}     | ${[-1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toStrictEqual(result);
  });
});
