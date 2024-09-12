const { getMinValue } = require('./A');

describe('2009A. Minimize!', () => {
  it.each`
    n    | a    | b     | result
    ${1} | ${1} | ${2}  | ${1}
    ${2} | ${3} | ${10} | ${7}
    ${3} | ${5} | ${5}  | ${0}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getMinValue(a, b)).toBe(result);
  });
});
