const { transformScore } = require('./A');

describe('1237A. Balanced Rating Changes', () => {
  it.each`
    n    | arr                             | result
    ${1} | ${[10, -5, -5]}                 | ${[5, -2, -3]}
    ${2} | ${[-7, -29, 0, 3, 24, -29, 38]} | ${[-3, -15, 0, 2, 12, -15, 19]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformScore(arr)).toStrictEqual(result);
  });
});
