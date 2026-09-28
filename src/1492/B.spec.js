const { reorder } = require('./B');

describe('1492B. Card Deck', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 3, 4]}       | ${[4, 3, 2, 1]}
    ${2} | ${[1, 5, 2, 4, 3]}    | ${[5, 2, 4, 3, 1]}
    ${3} | ${[4, 2, 5, 3, 6, 1]} | ${[6, 1, 5, 3, 4, 2]}
    ${4} | ${[1]}                | ${[1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorder(arr)).toStrictEqual(result);
  });
});
