const { getMinCost } = require('./B');

describe('1969B. Shifts and Sorting', () => {
  it.each`
    n    | map           | result
    ${1} | ${'10'}       | ${2}
    ${2} | ${'0000'}     | ${0}
    ${3} | ${'11000'}    | ${9}
    ${2} | ${'101011'}   | ${5}
    ${3} | ${'01101001'} | ${11}
  `('Base test: $n', ({ map, result }) => {
    expect(getMinCost(map)).toBe(result);
  });
});
