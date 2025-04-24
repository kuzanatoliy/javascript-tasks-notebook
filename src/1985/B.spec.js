const { getOptimalValue } = require('./B');

describe('1985B. Maximum Multiple Sum', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${3}
    ${2} | ${2}   | ${2}
  `('Base test: $n', ({ number, result }) => {
    expect(getOptimalValue(number)).toStrictEqual(result);
  });
});
