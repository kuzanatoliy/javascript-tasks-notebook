const { getCountOfBreaks } = require('./A');

describe('1059A. Cashier', () => {
  it.each`
    n    | l     | d    | clients             | result
    ${1} | ${11} | ${3} | ${[[0, 1], [1, 1]]} | ${3}
    ${2} | ${5}  | ${2} | ${[]}               | ${2}
    ${3} | ${3}  | ${2} | ${[[1, 2]]}         | ${0}
  `('Base test: $n', ({ l, d, clients, result }) => {
    expect(getCountOfBreaks(l, d, clients)).toBe(result);
  });
});
