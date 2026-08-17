const { getLeftTime } = require('./B');

describe('2184B. Hourglass', () => {
  it.each`
    n    | s     | k     | m     | result
    ${1} | ${8}  | ${8}  | ${12} | ${4}
    ${2} | ${5}  | ${10} | ${17} | ${0}
    ${3} | ${12} | ${2}  | ${3}  | ${1}
    ${4} | ${16} | ${7}  | ${7}  | ${7}
    ${5} | ${1}  | ${1}  | ${10} | ${1}
    ${6} | ${2}  | ${60} | ${15} | ${0}
  `('Base test: $n', ({ s, k, m, result }) => {
    expect(getLeftTime(s, k, m)).toBe(result);
  });
});
