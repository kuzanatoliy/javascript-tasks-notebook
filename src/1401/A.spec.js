const { getCountOfOperations } = require('./A');

describe('1401A. Distance and Axis', () => {
  it.each`
    n    | num        | k          | result
    ${1} | ${4}       | ${0}       | ${0}
    ${2} | ${5}       | ${8}       | ${3}
    ${3} | ${0}       | ${1000000} | ${1000000}
    ${4} | ${0}       | ${0}       | ${0}
    ${5} | ${1}       | ${0}       | ${1}
    ${6} | ${1000000} | ${1000000} | ${0}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfOperations(num, k)).toBe(result);
  });
});
