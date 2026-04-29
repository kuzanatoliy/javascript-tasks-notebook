const { getOptimalConfig } = require('./B');

describe('939B. Hamster Farm', () => {
  it.each`
    n    | num   | arr           | result
    ${1} | ${19} | ${[5, 4, 10]} | ${[2, 4]}
    ${2} | ${28} | ${[5, 6, 30]} | ${[1, 5]}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getOptimalConfig(num, arr)).toStrictEqual(result);
  });
});
