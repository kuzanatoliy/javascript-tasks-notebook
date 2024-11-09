const { getCountOfSteps } = require('./A');

describe('1452A. Robot Program', () => {
  it.each`
    n    | x    | y    | result
    ${1} | ${5} | ${5} | ${10}
    ${2} | ${3} | ${4} | ${7}
    ${3} | ${7} | ${1} | ${13}
    ${4} | ${0} | ${0} | ${0}
    ${5} | ${2} | ${0} | ${3}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfSteps(x, y)).toBe(result);
  });
});
