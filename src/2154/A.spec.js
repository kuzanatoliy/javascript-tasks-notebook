const { getCountOfProtectedItems } = require('./A');

describe('2154A. Notelock', () => {
  it.each`
    n    | map           | k    | result
    ${1} | ${'11'}       | ${2} | ${1}
    ${2} | ${'100001'}   | ${6} | ${1}
    ${3} | ${'10000'}    | ${3} | ${1}
    ${4} | ${'1010101'}  | ${2} | ${4}
    ${5} | ${'0000001'}  | ${4} | ${1}
    ${6} | ${'010'}      | ${3} | ${1}
    ${7} | ${'011'}      | ${2} | ${1}
    ${8} | ${'1001001'}  | ${4} | ${1}
    ${9} | ${'00000000'} | ${3} | ${0}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getCountOfProtectedItems(map, k)).toBe(result);
  });
});
