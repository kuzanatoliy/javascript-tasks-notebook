const { getHappyNumbersCount } = require('./C');

describe('630C. Lucky Numbers', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${6}
  `('Base test: $n', ({ num, result }) => {
    expect(getHappyNumbersCount(num)).toBe(result);
  });
});
