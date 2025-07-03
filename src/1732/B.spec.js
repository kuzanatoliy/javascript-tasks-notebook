const { getCountOfOperations } = require('./B');

describe('1732B. Ugu', () => {
  it.each`
    n    | str             | result
    ${1} | ${'1'}          | ${0}
    ${2} | ${'10'}         | ${1}
    ${3} | ${'101'}        | ${2}
    ${4} | ${'1100'}       | ${1}
    ${5} | ${'11001'}      | ${2}
    ${6} | ${'100010'}     | ${3}
    ${7} | ${'0000110000'} | ${1}
    ${8} | ${'0101010'}    | ${5}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
