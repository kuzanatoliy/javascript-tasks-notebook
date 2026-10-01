const { getFarmsCount } = require('./A');

describe('2259A. The Best Card', () => {
  it.each`
    n    | k    | map           | result
    ${1} | ${2} | ${'10011100'} | ${1}
    ${2} | ${1} | ${'11111'}    | ${5}
    ${3} | ${4} | ${'01111110'} | ${0}
    ${4} | ${1} | ${'00101'}    | ${2}
    ${5} | ${4} | ${'1101'}     | ${0}
    ${6} | ${4} | ${'1111'}     | ${1}
  `('Base test: $n', ({ k, map, result }) => {
    expect(getFarmsCount(k, map)).toBe(result);
  });
});
