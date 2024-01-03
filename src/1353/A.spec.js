const { getMaxPossibleValue } = require('./A');

describe('1353A. Most Unstable Array', () => {
  it.each`
    n    | length        | sum           | result
    ${1} | ${1}          | ${100}        | ${0}
    ${2} | ${2}          | ${2}          | ${2}
    ${3} | ${5}          | ${5}          | ${10}
    ${4} | ${2}          | ${1000000000} | ${1000000000}
    ${5} | ${1000000000} | ${1000000000} | ${2000000000}
  `('Base test: $n', ({ length, sum, result }) => {
    expect(getMaxPossibleValue(length, sum)).toBe(result);
  });
});
