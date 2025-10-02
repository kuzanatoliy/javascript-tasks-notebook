const { getCountOfSubarrs } = require('./A');

describe('2151A. Incremental Subarray', () => {
  it.each`
    n    | num       | arr                   | result
    ${1} | ${4}      | ${[1]}                | ${4}
    ${2} | ${5}      | ${[1, 2, 3]}          | ${3}
    ${3} | ${6}      | ${[3, 1, 2, 3, 4, 1]} | ${1}
    ${4} | ${100000} | ${[100000]}           | ${1}
    ${5} | ${4}      | ${[1, 1]}             | ${1}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getCountOfSubarrs(num, arr)).toBe(result);
  });
});
