const { getNumber } = require('./A');

describe('1844A. Subtraction Game', () => {
  it.each`
    n    | a    | b     | result
    ${1} | ${1} | ${4}  | ${5}
    ${2} | ${1} | ${5}  | ${6}
    ${3} | ${9} | ${26} | ${35}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getNumber(a, b)).toBe(result);
  });
});
