const { getMaxObtainedValue } = require('./A');

describe('1730A. Planets', () => {
  it.each`
    n    | value   | result
    ${1} | ${6}    | ${0}
    ${2} | ${10}   | ${1}
    ${3} | ${1033} | ${342}
  `('Base test: $n', ({ value, result }) => {
    expect(getMaxObtainedValue(value)).toBe(result);
  });
});
