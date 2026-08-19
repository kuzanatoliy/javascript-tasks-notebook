const { getWaysCount } = require('./B');

describe('1840B. Binary Cafe', () => {
  it.each`
    n    | num    | k      | result
    ${1} | ${1}   | ${2}   | ${2}
    ${2} | ${2}   | ${1}   | ${2}
    ${3} | ${2}   | ${2}   | ${3}
    ${4} | ${10}  | ${2}   | ${4}
    ${5} | ${179} | ${100} | ${180}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getWaysCount(num, k)).toBe(result);
  });
});
