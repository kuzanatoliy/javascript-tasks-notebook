const { getCountOfIndexes } = require('./A');

describe('1682A. Palindromic Indices', () => {
  it.each`
    n    | str           | result
    ${1} | ${'aba'}      | ${1}
    ${2} | ${'acaaaaca'} | ${4}
    ${3} | ${'dd'}       | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfIndexes(str)).toStrictEqual(result);
  });
});
