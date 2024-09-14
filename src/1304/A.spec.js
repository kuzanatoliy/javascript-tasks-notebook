const { getCountOfSteps } = require('./A');

describe('1304A. Two Rabbits', () => {
  it.each`
    n    | x            | y             | a    | b          | result
    ${1} | ${0}         | ${10}         | ${2} | ${3}       | ${2}
    ${2} | ${0}         | ${10}         | ${3} | ${3}       | ${-1}
    ${3} | ${900000000} | ${1000000000} | ${1} | ${9999999} | ${10}
    ${4} | ${1}         | ${2}          | ${1} | ${1}       | ${-1}
    ${5} | ${1}         | ${3}          | ${1} | ${1}       | ${1}
  `('Base test: $n', ({ x, y, a, b, result }) => {
    expect(getCountOfSteps(x, y, a, b)).toBe(result);
  });
});
