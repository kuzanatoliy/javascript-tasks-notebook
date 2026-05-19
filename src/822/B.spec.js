const { getReplacementIndexes } = require('./B');

describe('822B. Crossword solving', () => {
  it.each`
    n    | str1      | str2            | result
    ${1} | ${'abc'}  | ${'xaybz'}      | ${[1, 3]}
    ${2} | ${'abcd'} | ${'ebceabazcd'} | ${[2]}
    ${3} | ${'a'}    | ${'z'}          | ${[1]}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getReplacementIndexes(str1, str2)).toStrictEqual(result);
  });
});
