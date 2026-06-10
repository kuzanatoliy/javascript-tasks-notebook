const { getOperations } = require('./C1');

describe('2229C1. We Be Flipping (Easy Version)', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[-1, -2, -3, -5, -4]} | ${[]}
    ${2} | ${[-1, -2, 3, -5, 4]}   | ${[5, 4, 3, 2]}
    ${3} | ${[5, 7, 10, 19]}       | ${[4]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperations(arr)).toStrictEqual(result);
  });
});
