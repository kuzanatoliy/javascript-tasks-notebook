const { restore } = require('./B');

describe('2025B. Binomial Coefficients, Kind Of', () => {
  it.each`
    n    | arr                                  | result
    ${1} | ${[1, 2, 3, 1, 33333, 66666, 99999]} | ${[2, 4, 8, 2, 326186014, 984426998, 303861760]}
  `('Base test: $n', ({ arr, result }) => {
    expect(restore(arr)).toStrictEqual(result);
  });
});
