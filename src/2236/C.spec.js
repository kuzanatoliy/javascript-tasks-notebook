const { getOperationCount } = require('./C');

describe('2236C. Omsk Programmers', () => {
  it.each`
    n    | a     | b     | x     | result
    ${1} | ${1}  | ${2}  | ${3}  | ${1}
    ${2} | ${2}  | ${3}  | ${2}  | ${1}
    ${3} | ${7}  | ${3}  | ${10} | ${2}
    ${4} | ${17} | ${3}  | ${3}  | ${3}
    ${5} | ${10} | ${10} | ${2}  | ${0}
    ${6} | ${4}  | ${7}  | ${2}  | ${2}
    ${7} | ${1}  | ${6}  | ${2}  | ${2}
  `('Base test: $n', ({ a, b, x, result }) => {
    expect(getOperationCount(a, b, x)).toBe(result);
  });
});
