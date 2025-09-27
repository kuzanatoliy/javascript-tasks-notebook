const { getCountOfOperations } = require('./A');

describe('2140A. Shift Sort', () => {
  it.each`
    n    | str         | result
    ${1} | ${'001'}    | ${0}
    ${2} | ${'0110'}   | ${1}
    ${3} | ${'110100'} | ${2}
    ${4} | ${'101011'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
