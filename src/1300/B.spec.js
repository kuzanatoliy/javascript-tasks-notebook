const { getMinDif } = require('./B');

describe('1300B. Assigning to Classes', () => {
  it.each`
    n    | arr                                    | result
    ${1} | ${[1, 1]}                              | ${0}
    ${2} | ${[6, 5, 4, 1, 2, 3]}                  | ${1}
    ${4} | ${[13, 4, 20, 13, 2, 5, 8, 3, 17, 16]} | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinDif(arr)).toBe(result);
  });
});
