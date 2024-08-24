const { isItPossibleToOpenAllDors } = require('./A');

describe('1644A. Doors and Keys', () => {
  it.each`
    n    | string      | result
    ${1} | ${'rgbBRG'} | ${'YES'}
    ${2} | ${'RgbrBG'} | ${'NO'}
    ${3} | ${'bBrRgG'} | ${'YES'}
    ${4} | ${'rgRGBb'} | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToOpenAllDors(string)).toBe(result);
  });
});
