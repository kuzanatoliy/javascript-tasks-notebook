const { getCountOfSteps } = require('./A');

describe('1255A. Changing Volume', () => {
  it.each`
    n    | a    | b     | result
    ${1} | ${4} | ${0}  | ${2}
    ${2} | ${5} | ${14} | ${3}
    ${3} | ${3} | ${9}  | ${2}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfSteps(a, b)).toBe(result);
  });
});
