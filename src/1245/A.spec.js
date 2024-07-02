const { checkBlack } = require('./A');

describe("1245A. Good ol' Numbers Coloring", () => {
  it.each`
    n    | w     | b     | result
    ${1} | ${10} | ${10} | ${'Infinite'}
    ${2} | ${1}  | ${10} | ${'Finite'}
    ${3} | ${6}  | ${9}  | ${'Infinite'}
    ${4} | ${7}  | ${3}  | ${'Finite'}
  `('Base test: $n', ({ w, b, result }) => {
    expect(checkBlack(w, b)).toBe(result);
  });
});
