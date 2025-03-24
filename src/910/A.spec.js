const { getCountOfJumps } = require('./A');

describe('910A. Tricky Alchemy', () => {
  it.each`
    n    | map               | k    | result
    ${1} | ${'10010101'}     | ${4} | ${2}
    ${2} | ${'1001'}         | ${2} | ${-1}
    ${3} | ${'11100101'}     | ${4} | ${3}
    ${4} | ${'101111100101'} | ${3} | ${4}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getCountOfJumps(map, k)).toBe(result);
  });
});
