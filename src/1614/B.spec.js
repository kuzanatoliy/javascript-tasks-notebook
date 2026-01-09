const { getMapAndCost } = require('./B');

describe('1614B. Divan and a New Project', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[1, 2, 3]}        | ${[14, [0, 2, -1, 1]]}
    ${2} | ${[3, 8, 10, 6, 1]} | ${[78, [0, -2, -1, 1, 2, 3]]}
    ${3} | ${[1, 1, 1, 1, 1]}  | ${[18, [0, 1, -1, 2, -2, 3]]}
    ${4} | ${[0]}              | ${[0, [0, 1]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMapAndCost(arr)).toStrictEqual(result);
  });
});
