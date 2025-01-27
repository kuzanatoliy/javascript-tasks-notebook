const { getMaxFibonaciness } = require('./A');

describe('2060A. Fibonacciness', () => {
  it.each`
    n    | a1     | a2     | a4     | a5     | result
    ${1} | ${1}   | ${1}   | ${3}   | ${5}   | ${3}
    ${2} | ${1}   | ${3}   | ${2}   | ${1}   | ${2}
    ${3} | ${8}   | ${10}  | ${28}  | ${100} | ${2}
    ${4} | ${100} | ${1}   | ${100} | ${1}   | ${1}
    ${5} | ${1}   | ${100} | ${1}   | ${100} | ${1}
    ${6} | ${100} | ${100} | ${100} | ${100} | ${2}
  `('Base test: $n', ({ a1, a2, a4, a5, result }) => {
    expect(getMaxFibonaciness(a1, a2, a4, a5)).toBe(result);
  });
});
