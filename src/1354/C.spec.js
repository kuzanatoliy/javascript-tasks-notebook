const { getSide } = require('./C');

describe('1354C1. Simple Polygon Embedding', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${1.0000000000000002}
    ${2} | ${4}   | ${2.4142135623730954}
    ${3} | ${200} | ${127.32133646887213}
  `('Base test: $n', ({ num, result }) => {
    expect(getSide(num)).toBe(result);
  });
});
