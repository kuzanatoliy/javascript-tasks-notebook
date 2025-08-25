const { getNextLuckyYear } = require('./A');

describe('808A. Lucky Year', () => {
  it.each`
    n    | year    | result
    ${1} | ${4}    | ${1}
    ${2} | ${201}  | ${99}
    ${3} | ${4000} | ${1000}
    ${4} | ${90}   | ${10}
  `('Base test: $n', ({ year, result }) => {
    expect(getNextLuckyYear(year)).toBe(result);
  });
});
