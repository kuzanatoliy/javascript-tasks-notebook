const { getWayCount } = require('./B');

describe('2238B. Crimson Triples', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${1}
    ${2} | ${2}  | ${5}
    ${3} | ${20} | ${612}
  `('Base test: $n', ({ num, result }) => {
    expect(getWayCount(num)).toBe(result);
  });
});
