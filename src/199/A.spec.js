const { getNumbers } = require('./A');

describe("199A. Hexadecimal's theorem", () => {
  it.each`
    n    | num   | result
    ${1} | ${3}  | ${[0, 0, 3]}
    ${2} | ${13} | ${[0, 0, 13]}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumbers(num)).toStrictEqual(result);
  });
});
