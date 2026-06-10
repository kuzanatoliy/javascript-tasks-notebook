const { reorderArray } = require('./C');

describe('2227C. Snowfall', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[12, 7, 9, 4, 18, 5]}     | ${[4, 7, 5, 9, 12, 18]}
    ${2} | ${[3, 6, 2, 8]}             | ${[2, 8, 3, 6]}
    ${3} | ${[1, 10, 15, 20, 3, 6, 9]} | ${[10, 20, 1, 15, 3, 9, 6]}
    ${4} | ${[11, 14, 21, 2, 5]}       | ${[14, 2, 11, 5, 21]}
    ${5} | ${[6, 6, 6]}                | ${[6, 6, 6]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorderArray(arr)).toStrictEqual(result);
  });
});
