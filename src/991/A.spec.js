const { getLooserCount } = require('./A');

describe("991A. If at first you don't succeed...", () => {
  it.each`
    n    | a     | b     | c    | num   | result
    ${1} | ${10} | ${10} | ${5} | ${20} | ${5}
    ${2} | ${2}  | ${2}  | ${0} | ${4}  | ${-1}
    ${3} | ${2}  | ${2}  | ${2} | ${1}  | ${-1}
  `('Base test: $n', ({ a, b, c, num, result }) => {
    expect(getLooserCount(a, b, c, num)).toBe(result);
  });
});
