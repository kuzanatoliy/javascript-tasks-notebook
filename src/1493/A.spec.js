const { getSet } = require('./A');

describe('1493A. Anti-knapsack', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${3} | ${2} | ${[3, 1]}
    ${2} | ${5} | ${3} | ${[5, 4, 2]}
    ${3} | ${1} | ${1} | ${[]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getSet(num, k)).toStrictEqual(result);
  });
});
