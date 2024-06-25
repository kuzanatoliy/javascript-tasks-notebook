const { getCountsOfInformedUsers } = require('./C');

describe('1167C. News Distribution', () => {
  it.each`
    n    | count | groups                                  | result
    ${1} | ${7}  | ${[[2, 5, 4], [], [1, 2], [1], [6, 7]]} | ${[4, 4, 1, 4, 4, 2, 2]}
  `('Base test: $n', ({ count, groups, result }) => {
    expect(getCountsOfInformedUsers(count, groups)).toStrictEqual(result);
  });
});
