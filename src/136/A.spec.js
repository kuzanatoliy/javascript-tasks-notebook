const { checkFriendsPresents } = require('./A');

describe('136A. Presentss', () => {
  it.each`
    n    | friends         | result
    ${1} | ${[2, 3, 4, 1]} | ${[4, 1, 2, 3]}
    ${2} | ${[1, 3, 2]}    | ${[1, 3, 2]}
    ${3} | ${[1, 2]}       | ${[1, 2]}
  `('Base test: $n', ({ friends, result }) => {
    expect(checkFriendsPresents(friends)).toStrictEqual(result);
  });
});
