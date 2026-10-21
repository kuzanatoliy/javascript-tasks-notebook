const { getMaxScore } = require('./B');

describe("B. Niko's Tactical Cards", () => {
  it.each`
    n    | arrA                | arrB                  | result
    ${1} | ${[4, -8, -1]}      | ${[-3, -7, 0]}        | ${6}
    ${2} | ${[-3, 1, 0, 7, 1]} | ${[-5, 3, -1, 4, -5]} | ${12}
    ${3} | ${[-7, 7, 5, 4, 9]} | ${[-9, -3, 3, 2, 2]}  | ${27}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxScore(arrA, arrB)).toBe(result);
  });
});
