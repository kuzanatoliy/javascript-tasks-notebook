const { getCost } = require('./B');

describe('2176A. Operations with Inversions', () => {
  it.each`
    n    | map              | result
    ${1} | ${'1'}           | ${0}
    ${2} | ${'101'}         | ${1}
    ${3} | ${'0110'}        | ${2}
    ${4} | ${'10101010100'} | ${2}
    ${5} | ${'11'}          | ${0}
  `('Base test: $n', ({ map, result }) => {
    expect(getCost(map)).toBe(result);
  });
});
