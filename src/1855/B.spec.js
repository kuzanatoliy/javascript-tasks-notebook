const { getMaxInterval } = require('./B');

describe('1855B. Longest Divisors Interval', () => {
  it.each`
    n     | num                     | result
    ${1}  | ${1n}                   | ${1n}
    ${2}  | ${40n}                  | ${2n}
    ${3}  | ${990990n}              | ${3n}
    ${4}  | ${4204474560n}          | ${6n}
    ${5}  | ${169958913706572972n}  | ${4n}
    ${6}  | ${365988220345828080n}  | ${22n}
    ${7}  | ${387701719537826430n}  | ${3n}
    ${8}  | ${620196883578129853n}  | ${1n}
    ${9}  | ${864802341280805662n}  | ${2n}
    ${10} | ${1000000000000000000n} | ${2n}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxInterval(num)).toBe(result);
  });
});
