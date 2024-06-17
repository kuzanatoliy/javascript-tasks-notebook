const { getDecimalRepresentation } = require('./A');

describe('1355A. Sequence with Digits', () => {
  it.each`
    n    | number | iterations | result
    ${1} | ${1}   | ${4}       | ${42}
    ${2} | ${487} | ${1}       | ${487}
    ${3} | ${487} | ${2}       | ${519}
    ${4} | ${487} | ${3}       | ${528}
    ${5} | ${487} | ${4}       | ${544}
    ${6} | ${487} | ${5}       | ${564}
    ${7} | ${487} | ${6}       | ${588}
    ${8} | ${487} | ${7}       | ${628}
  `('Base test: $n', ({ number, iterations, result }) => {
    expect(getDecimalRepresentation(number, iterations)).toBe(result);
  });
});
