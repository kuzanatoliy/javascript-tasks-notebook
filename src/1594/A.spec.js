const { getInterval } = require('./A');

describe('1594A. Consecutive Sum Riddle', () => {
  it.each`
    n    | num              | result
    ${1} | ${1}             | ${[0, 1]}
    ${2} | ${2}             | ${[-1, 2]}
    ${3} | ${3}             | ${[-2, 3]}
    ${4} | ${6}             | ${[-5, 6]}
    ${5} | ${100}           | ${[-99, 100]}
    ${6} | ${25}            | ${[-24, 25]}
    ${7} | ${3000000000000} | ${[-2999999999999, 3000000000000]}
  `('Base test: $n', ({ num, result }) => {
    expect(getInterval(num)).toStrictEqual(result);
  });
});
