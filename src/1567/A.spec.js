const { getRow } = require('./A');

describe('1567A. Domino Disaster', () => {
  it.each`
    n    | number      | result
    ${1} | ${'U'}      | ${'D'}
    ${2} | ${'LR'}     | ${'LR'}
    ${3} | ${'LRDLR'}  | ${'LRULR'}
    ${4} | ${'UUUUUU'} | ${'DDDDDD'}
  `('Base test: $n', ({ number, result }) => {
    expect(getRow(number)).toBe(result);
  });
});
