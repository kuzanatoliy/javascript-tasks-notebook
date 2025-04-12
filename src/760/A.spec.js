const { getMaxColumns } = require('./A');

describe('760A. Petr and a calendar', () => {
  it.each`
    n    | m     | d    | result
    ${1} | ${1}  | ${7} | ${6}
    ${2} | ${1}  | ${1} | ${5}
    ${3} | ${11} | ${6} | ${5}
  `('Base test: $n', ({ m, d, result }) => {
    expect(getMaxColumns(m, d)).toBe(result);
  });
});
