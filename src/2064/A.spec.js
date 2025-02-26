const { getCountOfOperations } = require('./A');

describe('2063A. Brogramming Contest', () => {
  it.each`
    n    | str        | result
    ${1} | ${'00110'} | ${2}
    ${2} | ${'1111'}  | ${1}
    ${3} | ${'001'}   | ${1}
    ${4} | ${'00000'} | ${0}
    ${5} | ${'101'}   | ${3}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
