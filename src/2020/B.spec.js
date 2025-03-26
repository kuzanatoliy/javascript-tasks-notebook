const { getMinCountOfBulbs } = require('./B');

describe('2020B. Brightness Begins', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${2}
    ${2} | ${3} | ${5}
    ${3} | ${8} | ${11}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinCountOfBulbs(num)).toBe(result);
  });
});
