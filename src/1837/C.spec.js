const { getBestBinaryString } = require('./C');

describe('1837C. Best Binary String', () => {
  it.each`
    n    | str            | result
    ${1} | ${'??01?'}     | ${'00011'}
    ${2} | ${'10100'}     | ${'10100'}
    ${3} | ${'1??10?'}    | ${'111100'}
    ${4} | ${'0?1?10?10'} | ${'001110010'}
    ${5} | ${'?'}         | ${'0'}
    ${6} | ${'??'}        | ${'00'}
  `('Base test: $n', ({ str, result }) => {
    expect(getBestBinaryString(str)).toBe(result);
  });
});
