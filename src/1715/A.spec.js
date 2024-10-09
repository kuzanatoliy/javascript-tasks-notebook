const { getCountOfSteps } = require('./A');

describe('1715A. Crossmarket', () => {
  it.each`
    n    | rows      | columns   | result
    ${1} | ${7}      | ${5}      | ${15}
    ${2} | ${5}      | ${7}      | ${15}
    ${3} | ${1}      | ${1}      | ${0}
    ${4} | ${100000} | ${100000} | ${299998}
    ${5} | ${57}     | ${228}    | ${340}
    ${6} | ${1}      | ${5}      | ${5}
    ${7} | ${5}      | ${1}      | ${5}
  `('Base test: $n', ({ rows, columns, result }) => {
    expect(getCountOfSteps(rows, columns)).toBe(result);
  });
});
