const { getMinCountOfInconvince } = require('./B');

describe('1543B. Customising the Track', () => {
  it.each`
    n    | arr                                 | result
    ${1} | ${[1, 2, 3]}                        | ${0}
    ${2} | ${[0, 1, 1, 0]}                     | ${4}
    ${3} | ${[8, 3, 6, 11, 5, 2, 1, 7, 10, 4]} | ${21}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCountOfInconvince(arr)).toBe(result);
  });
});
