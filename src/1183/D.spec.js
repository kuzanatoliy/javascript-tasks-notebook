const { getSizeOfGift } = require('./D');

describe('1183D. Candy Box (easy version)', () => {
  it.each`
    n    | arr                                                 | result
    ${1} | ${[1, 4, 8, 4, 5, 6, 3, 8]}                         | ${3}
    ${2} | ${[2, 1, 3, 3, 4, 3, 4, 4, 1, 3, 2, 2, 2, 4, 1, 1]} | ${10}
    ${3} | ${[2, 2, 4, 4, 4, 7, 7, 7, 7]}                      | ${9}
  `('Base test: $n', ({ arr, result }) => {
    expect(getSizeOfGift(arr)).toBe(result);
  });
});
