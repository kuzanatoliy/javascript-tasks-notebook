const { getGap } = require('./A');

describe('1877A. Goals of Victory', () => {
  it.each`
    n    | data                                          | result
    ${1} | ${[3, -4, 5]}                                 | ${-4}
    ${2} | ${[-30, 12, -57, 7, 0, -81, -68, 41, -89, 0]} | ${265}
  `('Base test: $n', ({ data, result }) => {
    expect(getGap(data)).toBe(result);
  });
});
