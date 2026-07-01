const { isItPossibleToTransform } = require('./B');

describe('2236B. Tatar TV Show', () => {
  it.each`
    n    | k    | str       | result
    ${1} | ${2} | ${'1010'} | ${'YES'}
    ${2} | ${2} | ${'111'}  | ${'NO'}
    ${3} | ${3} | ${'111'}  | ${'NO'}
    ${4} | ${1} | ${'110'}  | ${'YES'}
    ${5} | ${1} | ${'1'}    | ${'NO'}
  `('Base test: $n', ({ k, str, result }) => {
    expect(isItPossibleToTransform(k, str)).toBe(result);
  });
});
