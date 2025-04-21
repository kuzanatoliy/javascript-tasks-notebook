const { getMinValue } = require('./A');

describe('1102A. Integer Sequence Dividing', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${0}
    ${2} | ${5} | ${1}
    ${3} | ${6} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinValue(num)).toBe(result);
  });
});
