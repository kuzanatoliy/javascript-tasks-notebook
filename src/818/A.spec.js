const { getWinners } = require('./A');

describe('818A. Diplomas and Certificates', () => {
  it.each`
    n    | num              | k               | result
    ${1} | ${18}            | ${2}            | ${[3, 6, 9]}
    ${2} | ${9}             | ${10}           | ${[0, 0, 9]}
    ${3} | ${1000000000000} | ${5}            | ${[83333333333, 416666666665, 500000000002]}
    ${4} | ${1000000000000} | ${499999999999} | ${[1, 499999999999, 500000000000]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getWinners(num, k)).toStrictEqual(result);
  });
});
