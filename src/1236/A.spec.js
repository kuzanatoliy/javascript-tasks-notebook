const { getCountOfStones } = require('./A');

describe('1236A. Stones', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${3} | ${4} | ${5} | ${9}
    ${2} | ${1} | ${0} | ${5} | ${0}
    ${3} | ${5} | ${3} | ${2} | ${6}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getCountOfStones(a, b, c)).toBe(result);
  });
});
