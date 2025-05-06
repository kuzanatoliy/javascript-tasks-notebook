const { getRealData } = require('./B');

describe('1833B. Restore the Weather', () => {
  it.each`
    n    | arrA                      | arrB                    | k    | result
    ${1} | ${[1, 3, 5, 3, 9]}        | ${[2, 5, 11, 2, 4]}     | ${2} | ${[2, 2, 5, 4, 11]}
    ${2} | ${[-1, 3, -2, 0, -5, -1]} | ${[-4, 0, -1, 4, 0, 0]} | ${1} | ${[0, 4, -1, 0, -4, 0]}
    ${3} | ${[7, 7, 7]}              | ${[9, 4, 8]}            | ${3} | ${[4, 8, 9]}
  `('Base test: $n', ({ arrA, arrB, k, result }) => {
    expect(getRealData(arrA, arrB, k)).toStrictEqual(result);
  });
});
