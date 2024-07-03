const { getResultOfComparing } = require('./A');

describe('1741A. Compare T-Shirt Sizes', () => {
  it.each`
    n    | size1       | size2    | result
    ${1} | ${'XXXS'}   | ${'XS'}  | ${'<'}
    ${2} | ${'XXXL'}   | ${'XL'}  | ${'>'}
    ${3} | ${'XL'}     | ${'M'}   | ${'>'}
    ${4} | ${'XXL'}    | ${'XXL'} | ${'='}
    ${5} | ${'XXXXXS'} | ${'M'}   | ${'<'}
    ${6} | ${'L'}      | ${'M'}   | ${'>'}
  `('Base test: $n', ({ size1, size2, result }) => {
    expect(getResultOfComparing(size1, size2)).toBe(result);
  });
});
