const { buildNumber } = require('./A');

describe('352A. arr', () => {
  it.each`
    n    | arr                                                                      | result
    ${1} | ${[5, 0, 5, 0]}                                                          | ${0}
    ${2} | ${[5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5]}                                     | ${'5555555550'}
    ${3} | ${[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0]} | ${'55555555555555555500000'}
  `('Base test: $n', ({ arr, result }) => {
    expect(buildNumber(arr)).toBe(result);
  });
});
