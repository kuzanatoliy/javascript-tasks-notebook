const { getPosition } = require('./B');

describe("1560B. Who's Opposite?", () => {
  it.each`
    n    | a    | b    | c     | result
    ${1} | ${6} | ${2} | ${4}  | ${8}
    ${2} | ${2} | ${3} | ${1}  | ${-1}
    ${3} | ${2} | ${4} | ${10} | ${-1}
    ${4} | ${5} | ${3} | ${4}  | ${-1}
    ${5} | ${1} | ${3} | ${2}  | ${4}
    ${6} | ${2} | ${5} | ${4}  | ${1}
    ${7} | ${4} | ${3} | ${2}  | ${-1}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getPosition(a, b, c)).toBe(result);
  });
});
