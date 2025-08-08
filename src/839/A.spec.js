const { getCountOfDays } = require('./A');

describe('839A. Arya and Bran', () => {
  it.each`
    n    | days            | counts | result
    ${1} | ${[1, 2]}       | ${3}   | ${2}
    ${2} | ${[10, 10, 10]} | ${17}  | ${3}
    ${3} | ${[10]}         | ${9}   | ${-1}
  `('Base test: $n', ({ days, counts, result }) => {
    expect(getCountOfDays(days, counts)).toBe(result);
  });
});
