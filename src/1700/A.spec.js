const { getMinCost } = require('./A');

describe('1700A. Optimal Path', () => {
  it.each`
    n    | column   | row      | result
    ${1} | ${1}     | ${1}     | ${1}
    ${2} | ${2}     | ${3}     | ${12}
    ${3} | ${3}     | ${2}     | ${13}
    ${4} | ${7}     | ${1}     | ${28}
    ${5} | ${1}     | ${10}    | ${55}
    ${6} | ${5}     | ${5}     | ${85}
    ${7} | ${10000} | ${10000} | ${500099995000}
  `('Base test: $n', ({ column, row, result }) => {
    expect(getMinCost(column, row)).toBe(result);
  });
});
