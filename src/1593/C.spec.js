const { getCountOfSaves } = require('./C');

describe('1593C. Save More Mice', () => {
  it.each`
    n    | num   | arr                                    | result
    ${1} | ${10} | ${[8, 7, 5, 4, 9, 4]}                  | ${3}
    ${2} | ${2}  | ${[1, 1, 1, 1, 1, 1, 1, 1]}            | ${1}
    ${3} | ${12} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} | ${4}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getCountOfSaves(num, arr)).toBe(result);
  });
});
