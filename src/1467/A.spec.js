const { getMaxNum } = require('./A');

describe('1467A. Wizard of Orz', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'9'}
    ${2} | ${2} | ${'98'}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxNum(num)).toBe(result);
  });
});
