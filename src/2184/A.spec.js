const { getMaxDiff } = require('./A');

describe("2184A. Little Fairy's Painting", () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${2}
    ${2} | ${5}  | ${1}
    ${3} | ${12} | ${0}
    ${4} | ${9}  | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxDiff(num)).toBe(result);
  });
});
