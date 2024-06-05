const { getDivisor } = require('./A');

describe('762A. k-th divisor', () => {
  it.each`
    n    | number | k    | result
    ${1} | ${4}   | ${2} | ${2}
    ${2} | ${5}   | ${3} | ${-1}
    ${3} | ${12}  | ${5} | ${6}
    ${4} | ${1}   | ${2} | ${-1}
    ${5} | ${4}   | ${3} | ${4}
  `('Base test: $n', ({ number, k, result }) => {
    expect(getDivisor(number, k)).toBe(result);
  });
});
