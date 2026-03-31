const { getMinCountOfPacks } = require('./B');

describe('1804B. Vaccination', () => {
  it.each`
    n    | k     | d    | w    | arr                            | result
    ${1} | ${3}  | ${5} | ${3} | ${[1, 2, 3, 10, 11, 18]}       | ${2}
    ${2} | ${4}  | ${0} | ${0} | ${[3, 3, 3, 3, 3, 4]}          | ${3}
    ${3} | ${10} | ${2} | ${2} | ${[0, 1, 2, 3, 4, 5, 6, 7, 8]} | ${2}
    ${4} | ${10} | ${3} | ${6} | ${[10, 20, 30]}                | ${3}
    ${5} | ${5}  | ${4} | ${4} | ${[0, 2, 4, 6, 8]}             | ${1}
  `('Base test: $n', ({ k, d, w, arr, result }) => {
    expect(getMinCountOfPacks(k, d, w, arr)).toBe(result);
  });
});
