const { getLastColor } = require('./A');

describe("2175A. Little Fairy's Painting", () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 1, 1, 1, 1, 1]}       | ${1}
    ${2} | ${[1000]}                   | ${1000}
    ${3} | ${[8, 10, 15, 20, 25]}      | ${8}
    ${4} | ${[2, 5, 2, 4, 1, 2, 5, 3]} | ${5}
    ${5} | ${[40, 4, 1, 95, 8, 40]}    | ${8}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLastColor(arr)).toBe(result);
  });
});
