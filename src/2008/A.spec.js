const { isItPossibleToGetSum } = require('./A');

describe("2008A. Sakurako's Exam", () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${0} | ${1} | ${'NO'}
    ${2} | ${0} | ${3} | ${'NO'}
    ${3} | ${2} | ${0} | ${'YES'}
    ${4} | ${2} | ${3} | ${'YES'}
    ${5} | ${3} | ${1} | ${'NO'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(isItPossibleToGetSum(a, b)).toBe(result);
  });
});
