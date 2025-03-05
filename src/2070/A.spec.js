const { getCountOfFizzBuzzNums } = require('./A');

describe('2070A. FizzBuzz Remixed', () => {
  it.each`
    n    | num          | result
    ${1} | ${0}         | ${1}
    ${2} | ${5}         | ${3}
    ${3} | ${15}        | ${4}
    ${4} | ${42}        | ${9}
    ${5} | ${1337}      | ${270}
    ${6} | ${17101997}  | ${3420402}
    ${7} | ${998244353} | ${199648872}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfFizzBuzzNums(num)).toBe(result);
  });
});
