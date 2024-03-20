const { getMaxCountOfBooks } = require('./B');

describe('279B. Books', () => {
  it.each`
    n    | time  | booksList       | result
    ${1} | ${5}  | ${[3, 1, 2, 1]} | ${3}
    ${2} | ${3}  | ${[2, 2, 3]}    | ${1}
    ${3} | ${3}  | ${[5]}          | ${0}
    ${4} | ${10} | ${[4]}          | ${1}
  `('Base test: $n', ({ time, booksList, result }) => {
    expect(getMaxCountOfBooks(time, booksList)).toBe(result);
  });
});
