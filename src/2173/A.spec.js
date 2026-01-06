const { getMaxCountOfClasses } = require('./A');

describe('2173A. Sleeping Through Classes', () => {
  it.each`
    n    | k    | map           | result
    ${1} | ${1} | ${'1001'}     | ${1}
    ${2} | ${3} | ${'000'}      | ${3}
    ${3} | ${1} | ${'001'}      | ${2}
    ${4} | ${2} | ${'01000101'} | ${2}
  `('Base test: $n', ({ k, map, result }) => {
    expect(getMaxCountOfClasses(k, map)).toBe(result);
  });
});
