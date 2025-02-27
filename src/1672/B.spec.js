const { isItPossibleToTransform } = require('./B');

describe('1672A. Log Chopping', () => {
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
