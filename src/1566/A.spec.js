const { getMaxMedian } = require('./A');

describe('1566A. Median Maximization', () => {
  it.each`
    n    | m             | s             | result
    ${1} | ${1}          | ${5}          | ${5}
    ${2} | ${2}          | ${5}          | ${2}
    ${3} | ${3}          | ${5}          | ${2}
    ${4} | ${2}          | ${1}          | ${0}
    ${5} | ${7}          | ${17}         | ${4}
    ${6} | ${4}          | ${14}         | ${4}
    ${7} | ${1}          | ${1000000000} | ${1000000000}
    ${8} | ${1000000000} | ${1}          | ${0}
  `('Base test: $n', ({ m, s, result }) => {
    expect(getMaxMedian(m, s)).toBe(result);
  });
});
