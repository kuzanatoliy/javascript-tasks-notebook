const { getOperationCount } = require('./B');

describe("182B. Vasya's Calendar", () => {
  it.each`
    n    | d     | arr                                                 | result
    ${1} | ${4}  | ${[2, 2]}                                           | ${2}
    ${2} | ${5}  | ${[3, 4, 3]}                                        | ${3}
    ${3} | ${31} | ${[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]} | ${7}
  `('Base test: $n', ({ d, arr, result }) => {
    expect(getOperationCount(d, arr)).toBe(result);
  });
});
