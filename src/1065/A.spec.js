const { getCountOfFreeBars } = require('./A');

describe('1065A. Vasya and Chocolate', () => {
  it.each`
    n    | s              | a     | b              | c     | result
    ${1} | ${10n}         | ${3n} | ${1n}          | ${1n} | ${13n}
    ${2} | ${1000000000n} | ${1n} | ${1000000000n} | ${1n} | ${1000000001000000000n}
  `('Base test: $n', ({ s, a, b, c, result }) => {
    expect(getCountOfFreeBars(s, a, b, c)).toBe(result);
  });
});
