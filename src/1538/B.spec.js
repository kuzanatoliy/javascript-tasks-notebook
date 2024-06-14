const { getCountOfFriends } = require('./B');

describe('1538B. Friends and Candies', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[4, 5, 2, 5]}          | ${2}
    ${2} | ${[0, 4]}                | ${1}
    ${3} | ${[10, 8, 5, 1, 4]}      | ${-1}
    ${4} | ${[10000]}               | ${0}
    ${5} | ${[1, 1, 1, 1, 1, 1, 1]} | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfFriends(array)).toBe(result);
  });
});
