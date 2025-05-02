const { getFinalExpensives } = require('./B');

describe('1296B. Food Buying', () => {
  it.each`
    n    | num           | result
    ${1} | ${1}          | ${1}
    ${2} | ${10}         | ${11}
    ${3} | ${19}         | ${21}
    ${4} | ${9876}       | ${10973}
    ${5} | ${12345}      | ${13716}
    ${6} | ${1000000000} | ${1111111111}
  `('Base test: $n', ({ num, result }) => {
    expect(getFinalExpensives(num)).toBe(result);
  });
});
