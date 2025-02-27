const { isItPossibleToTransform } = require('./B');

describe('1672B. I love AAAB', () => {
  it.each`
    n    | str            | result
    ${1} | ${'AABAB'}     | ${'YES'}
    ${2} | ${'ABB'}       | ${'NO'}
    ${3} | ${'AAAAAAAAB'} | ${'YES'}
    ${4} | ${'A'}         | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransform(str)).toBe(result);
  });
});
