const { getPossibleBeauty } = require('./A');

describe('1471A. Strange Partition', () => {
  it.each`
    n    | x    | arr           | result
    ${1} | ${3} | ${[3, 6, 9]}  | ${[6, 6]}
    ${2} | ${3} | ${[6, 4, 11]} | ${[7, 8]}
  `('Base test: $n', ({ x, arr, result }) => {
    expect(getPossibleBeauty(x, arr)).toStrictEqual(result);
  });
});
