const { isItPossibleToTransform } = require('./B');

describe('1988B. Make Majority', () => {
  it.each`
    n    | map            | result
    ${1} | ${'0'}         | ${'NO'}
    ${2} | ${'1'}         | ${'YES'}
    ${3} | ${'01'}        | ${'NO'}
    ${4} | ${'100000001'} | ${'YES'}
    ${5} | ${'000011000'} | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToTransform(map)).toBe(result);
  });
});
