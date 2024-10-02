const { getMinCountOfSeconds } = require('./A');

describe("2013A. Zhan's Blender", () => {
  it.each`
    n    | num    | a    | b    | result
    ${1} | ${5}   | ${3} | ${4} | ${2}
    ${2} | ${3}   | ${1} | ${2} | ${3}
    ${3} | ${6}   | ${4} | ${3} | ${2}
    ${4} | ${100} | ${4} | ${3} | ${34}
    ${5} | ${9}   | ${3} | ${3} | ${3}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getMinCountOfSeconds(num, a, b)).toBe(result);
  });
});
