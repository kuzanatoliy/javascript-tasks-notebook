const { getLengthOfMaxSubArray } = require('./A');

describe('702A. Maximum Increase', () => {
  it.each`
    n    | array                             | result
    ${1} | ${[1, 7, 2, 11, 15]}              | ${3}
    ${2} | ${[100, 100, 100, 100, 100, 100]} | ${1}
    ${3} | ${[1, 2, 3]}                      | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getLengthOfMaxSubArray(array)).toBe(result);
  });
});
