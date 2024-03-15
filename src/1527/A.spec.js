const { getK } = require('./A');

describe('1527A. And Then There Were K', () => {
  it.each`
    n    | powers | result
    ${1} | ${2}   | ${1}
    ${2} | ${5}   | ${3}
    ${3} | ${17}  | ${15}
  `('Base test: $n', ({ powers, result }) => {
    expect(getK(powers)).toBe(result);
  });
});
