const { getCountOfSeparators } = require('./A');

describe('851A. Arpa and a research in Mexican wave', () => {
  it.each`
    n    | num   | k    | t     | result
    ${1} | ${10} | ${5} | ${3}  | ${3}
    ${2} | ${10} | ${5} | ${7}  | ${5}
    ${3} | ${10} | ${5} | ${12} | ${3}
  `('Base test: $n', ({ num, k, t, result }) => {
    expect(getCountOfSeparators(num, k, t)).toBe(result);
  });
});
