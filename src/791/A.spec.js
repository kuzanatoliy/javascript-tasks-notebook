const { getYears } = require('./A');

describe('791A. Bear and Big Brother', () => {
  it.each`
    n    | weight1 | weight2 | result
    ${1} | ${4}    | ${7}    | ${2}
    ${2} | ${4}    | ${9}    | ${3}
    ${3} | ${1}    | ${1}    | ${1}
  `('Base test: $n', ({ weight1, weight2, result }) => {
    expect(getYears(weight1, weight2)).toBe(result);
  });
});
