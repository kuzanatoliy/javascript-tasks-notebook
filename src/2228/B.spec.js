const { getStepsCount } = require('./B');

describe('2228B. Remilia Plays Soku', () => {
  it.each`
    n    | num   | x1   | x2   | k    | result
    ${1} | ${2}  | ${1} | ${2} | ${0} | ${1}
    ${2} | ${4}  | ${3} | ${2} | ${1} | ${2}
    ${3} | ${4}  | ${2} | ${3} | ${1} | ${2}
    ${4} | ${16} | ${8} | ${4} | ${2} | ${6}
    ${5} | ${2}  | ${1} | ${2} | ${2} | ${1}
  `('Base test: $n', ({ num, x1, x2, k, result }) => {
    expect(getStepsCount(num, x1, x2, k)).toBe(result);
  });
});
