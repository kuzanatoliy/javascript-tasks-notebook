const { getLastDay } = require('./A');

describe('139A. Petr and Book', () => {
  it.each`
    n    | count  | limits                          | result
    ${1} | ${100} | ${[15, 20, 20, 15, 10, 30, 45]} | ${6}
    ${2} | ${2}   | ${[1, 0, 0, 0, 0, 0, 0]}        | ${1}
  `('Base test: $n', ({ count, limits, result }) => {
    expect(getLastDay(count, limits)).toBe(result);
  });
});
