const { getAmount } = require('./C');

describe('1986C. Two Movies', () => {
  it.each`
    n    | a                   | b                   | result
    ${1} | ${[-1, 1]}          | ${[-1, -1]}         | ${0}
    ${2} | ${[-1]}             | ${[-1]}             | ${-1}
    ${3} | ${[0, -1, 1, 0, 1]} | ${[-1, 1, 0, 0, 1]} | ${1}
    ${4} | ${[-1, -1, -1, 1]}  | ${[-1, 1, 1, 1]}    | ${1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getAmount(a, b)).toBe(result);
  });
});
