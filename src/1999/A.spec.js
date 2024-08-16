const { getSumNumber } = require('./A');

describe('1999A. A+B Again?', () => {
  it.each`
    n    | a     | result
    ${1} | ${77} | ${14}
    ${2} | ${21} | ${3}
    ${3} | ${40} | ${4}
    ${4} | ${34} | ${7}
    ${5} | ${19} | ${10}
    ${6} | ${84} | ${12}
    ${7} | ${10} | ${1}
    ${8} | ${99} | ${18}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getSumNumber(a, b)).toBe(result);
  });
});
