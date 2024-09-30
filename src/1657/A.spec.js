const { getCountOfOperations } = require('./A');

describe('1657A. Integer Moves', () => {
  it.each`
    n    | x    | y     | result
    ${1} | ${8} | ${6}  | ${1}
    ${2} | ${0} | ${0}  | ${0}
    ${2} | ${9} | ${15} | ${2}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfOperations(x, y)).toBe(result);
  });
});
