const { getCountOfAdditionalPeople } = require('./A');

describe('1658A. Marin and Photoshoot', () => {
  it.each`
    n    | row                      | result
    ${1} | ${'000'}                 | ${4}
    ${2} | ${'001'}                 | ${2}
    ${3} | ${'010'}                 | ${1}
    ${4} | ${'011'}                 | ${0}
    ${5} | ${'100'}                 | ${2}
    ${6} | ${'101'}                 | ${0}
    ${7} | ${'110'}                 | ${0}
    ${8} | ${'111'}                 | ${0}
    ${9} | ${'1010110000100000101'} | ${17}
  `('Base test: $n', ({ row, result }) => {
    expect(getCountOfAdditionalPeople(row)).toBe(result);
  });
});
