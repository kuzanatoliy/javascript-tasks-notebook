const { getMinCost } = require('./A');

describe('1151A. Maxim and Biology', () => {
  it.each`
    n    | str         | result
    ${1} | ${'ZCTH'}   | ${2}
    ${2} | ${'ZDATG'}  | ${5}
    ${3} | ${'AFBAKC'} | ${16}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinCost(str)).toBe(result);
  });
});
