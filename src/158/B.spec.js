const { checkTaxisCount } = require('./B');

describe('158B. Taxi', () => {
  it.each`
    n    | gropus                      | result
    ${1} | ${[1, 2, 4, 3, 3]}          | ${4}
    ${2} | ${[2, 3, 4, 4, 2, 1, 3, 1]} | ${5}
  `('Base test: $n', ({ gropus, result }) => {
    expect(checkTaxisCount(gropus)).toBe(result);
  });
});
