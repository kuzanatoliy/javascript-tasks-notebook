const { getLeftTime } = require('./B');

describe('2184B. Hourglass', () => {
  it.each`
    n    | s     | k     | m     | result
    ${1} | ${8}  | ${8}  | ${12} | ${2}
    ${2} | ${5}  | ${10} | ${17} | ${2}
    ${3} | ${12} | ${2}  | ${3}  | ${2}
    ${4} | ${16} | ${7}  | ${7}  | ${2}
    ${5} | ${1}  | ${1}  | ${10} | ${2}
    ${6} | ${2}  | ${60} | ${15} | ${2}
  `('Base test: $n', ({ s, k, m, result }) => {
    expect(getLeftTime(s, k, m)).toBe(result);
  });
});
