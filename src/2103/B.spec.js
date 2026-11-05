const { getOperationsCount } = require('./B');

describe('2103B. Binary Typewriter', () => {
  it.each`
    n    | map                      | result
    ${1} | ${'000'}                 | ${3}
    ${2} | ${'111'}                 | ${4}
    ${3} | ${'011'}                 | ${4}
    ${4} | ${'100'}                 | ${4}
    ${5} | ${'10101'}               | ${8}
    ${6} | ${'1101010010011011100'} | ${29}
    ${7} | ${'010'}                 | ${4}
    ${8} | ${'0101'}                | ${5}
  `('Base test: $n', ({ map, result }) => {
    expect(getOperationsCount(map)).toBe(result);
  });
});
