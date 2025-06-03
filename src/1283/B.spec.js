const { getCandiesCount } = require('./B');

describe('1283B. Candies Division', () => {
  it.each`
    n    | num       | k        | result
    ${1} | ${5}      | ${2}     | ${5}
    ${2} | ${19}     | ${4}     | ${18}
    ${3} | ${12}     | ${7}     | ${10}
    ${4} | ${6}      | ${2}     | ${6}
    ${5} | ${100000} | ${50010} | ${75015}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCandiesCount(num, k)).toBe(result);
  });
});
