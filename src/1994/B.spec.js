const { isItPossibleToTransform } = require('./B');

describe('1994B. Fun Game', () => {
  it.each`
    n    | origin         | target         | result
    ${1} | ${'0'}         | ${'1'}         | ${'NO'}
    ${2} | ${'0110100'}   | ${'0110100'}   | ${'YES'}
    ${3} | ${'100101010'} | ${'101111110'} | ${'YES'}
    ${4} | ${'0011'}      | ${'1011'}      | ${'NO'}
    ${5} | ${'0100'}      | ${'0001'}      | ${'YES'}
    ${6} | ${'10110111'}  | ${'01100000'}  | ${'YES'}
  `('Base test: $n', ({ origin, target, result }) => {
    expect(isItPossibleToTransform(origin, target)).toStrictEqual(result);
  });
});
