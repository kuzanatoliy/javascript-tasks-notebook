const { getCost } = require('./C');

describe('2111C. Equal Values', () => {
  it.each`
    n    | arr                                 | result
    ${1} | ${[2, 4, 1, 3]}                     | ${3}
    ${2} | ${[1, 1, 1]}                        | ${0}
    ${3} | ${[7, 5, 5, 5, 10, 9, 9, 4, 6, 10]} | ${35}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCost(arr)).toBe(result);
  });
});
