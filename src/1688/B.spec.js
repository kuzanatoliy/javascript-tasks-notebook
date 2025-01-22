const { getCountOfOperations } = require('./B');

describe("1688B. Patchouli's Magical Talisman", () => {
  it.each`
    n    | num                       | result
    ${1} | ${[1, 9]}                 | ${0}
    ${2} | ${[1, 1, 2]}              | ${1}
    ${3} | ${[2, 4, 8]}              | ${3}
    ${4} | ${[1049600, 33792, 1280]} | ${10}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfOperations(num)).toBe(result);
  });
});
