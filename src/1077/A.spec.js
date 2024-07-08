const { getPosition } = require('./A');

describe('1077A. Frog Jumping', () => {
  it.each`
    n    | a             | b     | k             | result
    ${1} | ${5}          | ${2}  | ${3}          | ${8}
    ${2} | ${100}        | ${1}  | ${4}          | ${198}
    ${3} | ${1}          | ${10} | ${5}          | ${-17}
    ${4} | ${1000000000} | ${1}  | ${6}          | ${2999999997}
    ${5} | ${1}          | ${1}  | ${1000000000} | ${0}
    ${6} | ${1}          | ${1}  | ${999999999}  | ${1}
  `('Base test: $n', ({ a, b, k, result }) => {
    expect(getPosition(a, b, k)).toBe(result);
  });
});
