const { getEntranceYear } = require('./A');

describe('769A. Year of University Entrance', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[2014, 2016, 2015]} | ${2015}
    ${2} | ${[2050]}             | ${2050}
  `('Base test: $n', ({ arr, result }) => {
    expect(getEntranceYear(arr)).toBe(result);
  });
});
