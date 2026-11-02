const { getStepsCount } = require('./A');

describe('2271A. Robot Odd Moves', () => {
  it.each`
    n    | x       | y       | result
    ${1} | ${0}    | ${0}    | ${0}
    ${2} | ${0}    | ${1}    | ${1}
    ${3} | ${0}    | ${2}    | ${-1}
    ${4} | ${1}    | ${0}    | ${2}
    ${5} | ${2}    | ${1}    | ${3}
    ${6} | ${2}    | ${3}    | ${3}
    ${7} | ${5}    | ${6}    | ${6}
    ${8} | ${1000} | ${999}  | ${1001}
    ${9} | ${1000} | ${1000} | ${1000}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getStepsCount(x, y)).toBe(result);
  });
});
