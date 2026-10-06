const { getOperationsCount } = require('./C');

describe('2266C. AND, OR, Sort!', () => {
  it.each`
    n    | bstr          | result
    ${1} | ${'0011'}     | ${0}
    ${2} | ${'1000'}     | ${3}
    ${3} | ${'01000'}    | ${1}
    ${4} | ${'01001101'} | ${2}
    ${5} | ${'0101010'}  | ${3}
    ${6} | ${'0111101'}  | ${1}
  `('Base test: $n', ({ bstr, result }) => {
    expect(getOperationsCount(bstr)).toBe(result);
  });
});
