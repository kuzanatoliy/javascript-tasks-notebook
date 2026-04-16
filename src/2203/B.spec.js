const { getMinCountOfOperations } = require('./B');

describe('2203B. Beautiful Numbers', () => {
  it.each`
    n    | snum                  | result
    ${1} | ${'1'}                | ${0}
    ${2} | ${'37'}               | ${1}
    ${3} | ${'645'}              | ${2}
    ${4} | ${'2374236843276813'} | ${12}
  `('Base test: $n', ({ snum, result }) => {
    expect(getMinCountOfOperations(snum)).toBe(result);
  });
});
