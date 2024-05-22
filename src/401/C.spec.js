const { getOrder } = require('./C');

describe('401C. Team', () => {
  it.each`
    n    | c0   | c1    | result
    ${1} | ${1} | ${2}  | ${'110'}
    ${2} | ${4} | ${8}  | ${'110110110110'}
    ${3} | ${4} | ${10} | ${'11011011011011'}
    ${4} | ${1} | ${5}  | ${-1}
  `('Base test: $n', ({ c0, c1, result }) => {
    expect(getOrder(c0, c1)).toBe(result);
  });
});
