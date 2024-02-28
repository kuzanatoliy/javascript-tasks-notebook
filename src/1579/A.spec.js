const { isItPossibleToEliminateString } = require('./A');

describe("1579A. Casimir's String Solitaire", () => {
  it.each`
    n    | string                | result
    ${1} | ${'ABACAB'}           | ${'NO'}
    ${2} | ${'ABBA'}             | ${'YES'}
    ${3} | ${'AC'}               | ${'NO'}
    ${4} | ${'ABC'}              | ${'NO'}
    ${5} | ${'CABCBB'}           | ${'YES'}
    ${6} | ${'BCBCBCBCBCBCBCBC'} | ${'YES'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToEliminateString(string)).toBe(result);
  });
});
