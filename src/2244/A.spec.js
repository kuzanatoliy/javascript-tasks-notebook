const { getMaxTime } = require('./A');

describe('2244A. Iskander and Drawings', () => {
  it.each`
    n    | map           | result
    ${1} | ${'#*##*##'}  | ${1}
    ${2} | ${'########'} | ${4}
    ${3} | ${'********'} | ${0}
    ${4} | ${'#*****##'} | ${1}
    ${5} | ${'*#####'}   | ${3}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getMaxTime(map, k)).toBe(result);
  });
});
