const { getMaxScore } = require('./B');

describe("2264B. Knife's Pill Farm", () => {
  it.each`
    n    | k    | arr                   | result
    ${1} | ${3} | ${[0, 8, 1, 7, 3]}    | ${20}
    ${2} | ${3} | ${[0, -4, 10, -2]}    | ${34}
    ${3} | ${2} | ${[0, 5, -2, 4]}      | ${10}
    ${4} | ${3} | ${[0, 9, 8, 7, 6, 5]} | ${15}
    ${5} | ${1} | ${[7]}                | ${7}
    ${5} | ${2} | ${[5, -100, 4]}       | ${108}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getMaxScore(k, arr)).toBe(result);
  });
});
