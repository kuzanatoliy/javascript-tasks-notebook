const { buildString } = require('./B');

describe('2250B. String Construction', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${5} | ${2} | ${'00110'}
    ${2} | ${4} | ${3} | ${-1}
    ${3} | ${6} | ${1} | ${'011010'}
    ${4} | ${5} | ${0} | ${'01010'}
    ${5} | ${7} | ${3} | ${'0011101'}
    ${6} | ${4} | ${2} | ${'0011'}
    ${7} | ${3} | ${2} | ${-1}
    ${8} | ${7} | ${4} | ${'0001110'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(buildString(num, k)).toBe(result);
  });
});
