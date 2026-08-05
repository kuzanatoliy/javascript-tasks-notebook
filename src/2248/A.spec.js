const { transformString } = require('./A');

describe('2248A. You Delete, I Delete', () => {
  it.each`
    n    | map                         | result
    ${1} | ${'101'}                    | ${'1'}
    ${2} | ${'11001'}                  | ${'101'}
    ${3} | ${'0010'}                   | ${'00'}
    ${4} | ${'0101010000010100100101'} | ${'01010000010100100101'}
  `('Base test: $n', ({ map, result }) => {
    expect(transformString(map)).toBe(result);
  });
});
