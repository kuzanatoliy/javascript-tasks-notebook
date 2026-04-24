const { isItPossibleToTransform } = require('./A');

describe('887A. Div. 64', () => {
  it.each`
    n    | map            | result
    ${1} | ${'100010001'} | ${'YES'}
    ${2} | ${'100'}       | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToTransform(map)).toBe(result);
  });
});
