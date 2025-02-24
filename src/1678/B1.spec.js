const { getCountOfOperations } = require('./A');

describe('1678B1. Tokitsukaze and Good 01-String (easy version)', () => {
  it.each`
    n    | str             | result
    ${1} | ${'1110011000'} | ${3}
    ${2} | ${'11001111'}   | ${0}
    ${3} | ${'00'}         | ${0}
    ${4} | ${'11'}         | ${0}
    ${5} | ${'100110'}     | ${3}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
