const { getLostNumbers } = require('./B');

describe('1167A. Telephone Number', () => {
  it.each`
    n    | questionResults       | result
    ${1} | ${[32, 60, 368, 672]} | ${[4, 8, 15, 16, 23, 42]}
  `('Base test: $n', ({ questionResults, result }) => {
    expect(getLostNumbers(questionResults)).toStrictEqual(result);
  });
});
