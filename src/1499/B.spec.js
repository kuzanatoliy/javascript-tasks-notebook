const { isItPossibleToTransform } = require('./B');

describe('1499B. Binary Removals', () => {
  it.each`
    n    | map              | result
    ${1} | ${'10101011011'} | ${'YES'}
    ${2} | ${'0000'}        | ${'YES'}
    ${3} | ${'11111'}       | ${'YES'}
    ${4} | ${'110'}         | ${'YES'}
    ${5} | ${'1100'}        | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToTransform(map)).toBe(result);
  });
});
