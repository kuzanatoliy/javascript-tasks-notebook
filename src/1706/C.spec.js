const { getMinCountOfFloors } = require('./C');

describe('1706C. Qpwoeirut And The City', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[2, 1, 2]}                     | ${2}
    ${2} | ${[1, 2, 1, 4, 3]}               | ${0}
    ${3} | ${[3, 1, 4, 5, 5, 2]}            | ${3}
    ${4} | ${[4, 2, 1, 3, 5, 3, 6, 1]}      | ${3}
    ${5} | ${[1, 10, 1, 1, 10, 1]}          | ${0}
    ${6} | ${[1, 10, 11, 1, 10, 11, 10, 1]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCountOfFloors(arr)).toBe(result);
  });
});
