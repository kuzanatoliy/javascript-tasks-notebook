const { getCountOfOperation } = require('./C');

describe('1791C. Prepend and Append', () => {
  it.each`
    n    | string          | result
    ${1} | ${'100'}        | ${1}
    ${2} | ${'0111'}       | ${2}
    ${3} | ${'10101'}      | ${5}
    ${4} | ${'101010'}     | ${0}
    ${5} | ${'1010110'}    | ${3}
    ${6} | ${'1'}          | ${1}
    ${7} | ${'10'}         | ${0}
    ${8} | ${'11'}         | ${2}
    ${9} | ${'1011011010'} | ${4}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfOperation(string)).toBe(result);
  });
});
