const { getArrSum } = require('./B');

describe('1471B. Strange List', () => {
  it.each`
    n    | x    | arr                    | result
    ${1} | ${2} | ${[12]}                | ${36}
    ${2} | ${2} | ${[4, 6, 8, 2]}        | ${44}
    ${3} | ${7} | ${[49, 49, 49, 7, 49]} | ${553}
  `('Base test: $n', ({ x, arr, result }) => {
    expect(getArrSum(x, arr)).toBe(result);
  });
});
