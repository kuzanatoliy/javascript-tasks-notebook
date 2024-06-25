const { getCountOfInterestingNumbers } = require('./A');

describe('1553A. Digits Sum', () => {
  it.each`
    n    | number       | result
    ${1} | ${1}         | ${0}
    ${2} | ${9}         | ${1}
    ${3} | ${10}        | ${1}
    ${4} | ${34}        | ${3}
    ${5} | ${880055535} | ${88005553}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfInterestingNumbers(number)).toBe(result);
  });
});
