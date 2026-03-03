const { getMinTime } = require('./B');

describe("2179A. Little Fairy's Painting", () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[4, 15, 1, 7, 9]}         | ${11}
    ${2} | ${[2, 4, 8]}                | ${2}
    ${3} | ${[11, 13, 17, 19, 23, 29]} | ${12}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinTime(arr)).toBe(result);
  });
});
