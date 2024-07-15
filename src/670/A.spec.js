const { getMinmaxCountOfDays } = require('./A');

describe('670A. Again Twenty Five!', () => {
  it.each`
    n    | days  | result
    ${1} | ${14} | ${[4, 4]}
    ${2} | ${2}  | ${[0, 2]}
  `('Base test: $n', ({ days, result }) => {
    expect(getMinmaxCountOfDays(days)).toStrictEqual(result);
  });
});
