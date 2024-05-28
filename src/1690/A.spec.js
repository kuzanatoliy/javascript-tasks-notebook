const { getPedestals } = require('./A');

describe('1690A. Print a Pedestal (Codeforces logo?)', () => {
  it.each`
    n    | count     | result
    ${1} | ${11}     | ${[4, 5, 2]}
    ${2} | ${6}      | ${[2, 3, 1]}
    ${3} | ${10}     | ${[4, 5, 1]}
    ${4} | ${100000} | ${[33334, 33335, 33331]}
    ${5} | ${7}      | ${[2, 4, 1]}
    ${6} | ${8}      | ${[3, 4, 1]}
  `('Base test: $n', ({ count, result }) => {
    expect(getPedestals(count)).toStrictEqual(result);
  });
});
