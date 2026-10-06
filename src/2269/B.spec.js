const { getPairsCount } = require('./B');

describe('2269B. KiaKio and Squared Numbers', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[7, 4, 16, 4, 2]} | ${1}
    ${2} | ${[1, 7, 10, 100]}  | ${6}
    ${3} | ${[4, 16, 37]}      | ${0}
    ${4} | ${[2, 20, 4]}       | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPairsCount(arr)).toBe(result);
  });
});
