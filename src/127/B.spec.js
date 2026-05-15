const { getCountOfFrames } = require('./B');

describe('127A. Wasted Time', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[2, 4, 3, 2, 3]}                         | ${1}
    ${2} | ${[2, 2, 4, 4, 4, 4, 6, 6, 6, 7, 7, 9, 9]} | ${3}
    ${3} | ${[3, 3, 3, 5]}                            | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfFrames(arr)).toBe(result);
  });
});
