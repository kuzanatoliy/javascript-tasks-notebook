const { getMinCost } = require('./A');

describe('1260A. Heating', () => {
  it.each`
    n    | count    | sum      | result
    ${1} | ${1}     | ${10000} | ${100000000}
    ${2} | ${10000} | ${1}     | ${1}
    ${3} | ${2}     | ${6}     | ${18}
    ${4} | ${4}     | ${6}     | ${10}
  `('Base test: $n', ({ count, sum, result }) => {
    expect(getMinCost(count, sum)).toBe(result);
  });
});
