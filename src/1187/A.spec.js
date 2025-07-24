const { getCountOfEggs } = require('./A');

describe('1187A. Stickers and Toys', () => {
  it.each`
    n    | num   | t     | s     | result
    ${1} | ${10} | ${5}  | ${7}  | ${6}
    ${2} | ${10} | ${10} | ${10} | ${1}
    ${3} | ${2}  | ${1}  | ${1}  | ${2}
  `('Base test: $n', ({ num, t, s, result }) => {
    expect(getCountOfEggs(num, t, s)).toBe(result);
  });
});
