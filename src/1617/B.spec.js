const { getProps } = require('./B');

describe('1617B - GCD Problem', () => {
  it.each`
    n    | num          | result
    ${1} | ${18}        | ${[15, 2, 1]}
    ${2} | ${63}        | ${[33, 29, 1]}
    ${3} | ${73}        | ${[37, 35, 1]}
    ${4} | ${91}        | ${[47, 43, 1]}
    ${5} | ${438}       | ${[435, 2, 1]}
    ${6} | ${122690412} | ${[122690409, 2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getProps(num)).toStrictEqual(result);
  });
});
