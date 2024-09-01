const { getCountOfImproves } = require('./B');

describe('1092B. Teams Forming', () => {
  it.each`
    n    | array                   | result
    ${1} | ${[5, 10, 2, 3, 14, 5]} | ${5}
    ${2} | ${[1, 100]}             | ${99}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfImproves(array)).toBe(result);
  });
});
