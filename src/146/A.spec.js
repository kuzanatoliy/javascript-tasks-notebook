const { isLukyNum } = require('./A');

describe('146A. Lucky Ticket', () => {
  it.each`
    n    | snum      | result
    ${1} | ${'47'}   | ${'NO'}
    ${2} | ${'4738'} | ${'NO'}
    ${3} | ${'4774'} | ${'YES'}
  `('Base test: $n', ({ snum, result }) => {
    expect(isLukyNum(snum)).toBe(result);
  });
});
