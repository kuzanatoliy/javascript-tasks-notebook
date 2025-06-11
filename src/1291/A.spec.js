const { isItPossibleToTransform } = require('./A');

describe('1291A. Even But Not Even', () => {
  it.each`
    n    | str                           | result
    ${1} | ${'1227'}                     | ${'17'}
    ${2} | ${'0'}                        | ${-1}
    ${3} | ${'177013'}                   | ${'17'}
    ${4} | ${'222373204424185217171912'} | ${'37'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransform(str)).toBe(result);
  });
});
