const { isItPossibleToTransform } = require('./B');

describe('1223B. Strings Equalization', () => {
  it.each`
    n    | str1           | str2           | result
    ${1} | ${'xabb'}      | ${'aabx'}      | ${'YES'}
    ${2} | ${'technocup'} | ${'technocup'} | ${'YES'}
    ${3} | ${'a'}         | ${'z'}         | ${'NO'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isItPossibleToTransform(str1, str2)).toBe(result);
  });
});
