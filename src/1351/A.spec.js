const { plusNums } = require('./A');

describe('1351A. A+B (Trial Problem)', () => {
  it.each`
    n    | a      | b      | result
    ${1} | ${1}   | ${5}   | ${6}
    ${2} | ${314} | ${15}  | ${329}
    ${3} | ${-99} | ${99}  | ${0}
    ${4} | ${123} | ${987} | ${1110}
  `('Base test: $n', ({ a, b, result }) => {
    expect(plusNums(a, b)).toBe(result);
  });
});
