const { getCountOfSteps } = require('./A');

describe('2035A. Sliding', () => {
  it.each`
    n    | num        | m          | r    | c    | result
    ${1} | ${2}       | ${3}       | ${1} | ${2} | ${6}
    ${2} | ${2}       | ${2}       | ${2} | ${1} | ${1}
    ${3} | ${1}       | ${1}       | ${1} | ${1} | ${0}
    ${4} | ${1000000} | ${1000000} | ${1} | ${1} | ${1999998000000}
  `('Base test: $n', ({ num, m, r, c, result }) => {
    expect(getCountOfSteps(num, m, r, c)).toBe(result);
  });
});
