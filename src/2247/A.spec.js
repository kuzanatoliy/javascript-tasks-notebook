const { isItPossibleToTransform } = require('./A');

describe('2247A. Zero Sum', () => {
  it.each`
    n    | map                        | result
    ${1} | ${[-1]}                    | ${'NO'}
    ${2} | ${[1, -1]}                 | ${'YES'}
    ${3} | ${[1, 1]}                  | ${'NO'}
    ${4} | ${[1, -1, 1, -1, 1]}       | ${'NO'}
    ${5} | ${[-1, 1, -1, -1, -1, -1]} | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToTransform(map)).toBe(result);
  });
});
