const { getCountOfDays } = require('./A');

describe('884A. Book Reading', () => {
  it.each`
    n    | array             | k        | result
    ${1} | ${[86400, 86398]} | ${2}     | ${2}
    ${2} | ${[0, 86400]}     | ${86400} | ${1}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getCountOfDays(array, k)).toBe(result);
  });
});
