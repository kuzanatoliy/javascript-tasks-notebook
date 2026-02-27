const { isItPossibleToTransform } = require('./A');

describe('1111A. Superhero Transformation', () => {
  it.each`
    n    | str1     | str2     | result
    ${1} | ${'a'}   | ${'u'}   | ${'YES'}
    ${2} | ${'abc'} | ${'ukm'} | ${'YES'}
    ${3} | ${'akm'} | ${'ua'}  | ${'NO'}
    ${4} | ${'u'}   | ${'d'}   | ${'NO'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isItPossibleToTransform(str1, str2)).toBe(result);
  });
});
