const { getMinGoldCount } = require('./C');

describe('2014B. Robin Hood and the Major Oak', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[2]}                 | ${-1}
    ${2} | ${[1, 19]}             | ${-1}
    ${3} | ${[1, 3, 20]}          | ${0}
    ${4} | ${[1, 2, 3, 4]}        | ${15}
    ${5} | ${[1, 2, 3, 4, 5]}     | ${16}
    ${6} | ${[1, 2, 1, 1, 1, 25]} | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinGoldCount(arr)).toBe(result);
  });
});
