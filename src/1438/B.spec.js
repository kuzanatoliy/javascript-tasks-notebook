const { areExistedSubarrays } = require('./B');

describe('1438B. Valerii Against Everyone', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[4, 3, 0, 1, 2, 0]} | ${'YES'}
    ${2} | ${[2, 5]}             | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(areExistedSubarrays(arr)).toStrictEqual(result);
  });
});
