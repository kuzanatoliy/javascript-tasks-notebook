const { getCountOfFriends } = require('./A');

describe('2197A. Friendly Numbers', () => {
  it.each`
    n    | x            | result
    ${1} | ${1}         | ${0}
    ${2} | ${18}        | ${10}
    ${3} | ${998244360} | ${10}
  `('Base test: $n', ({ x, result }) => {
    expect(getCountOfFriends(x)).toBe(result);
  });
});
