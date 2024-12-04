const { getMinCountOfWalls } = require('./A');

describe('1481A. Prison Break', () => {
  it.each`
    n    | num  | m    | result
    ${1} | ${2} | ${2} | ${4}
    ${2} | ${1} | ${3} | ${3}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMinCountOfWalls(num, m)).toBe(result);
  });
});
