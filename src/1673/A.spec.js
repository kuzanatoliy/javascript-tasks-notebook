const { getWinner } = require('./A');

describe('1673A. Subtle Substring Subtraction', () => {
  it.each`
    n    | str             | result
    ${1} | ${'aba'}        | ${'Alice 2'}
    ${2} | ${'abc'}        | ${'Alice 4'}
    ${3} | ${'cba'}        | ${'Alice 4'}
    ${4} | ${'n'}          | ${'Bob 14'}
    ${5} | ${'codeforces'} | ${'Alice 93'}
  `('Base test: $n', ({ str, result }) => {
    expect(getWinner(str)).toBe(result);
  });
});
